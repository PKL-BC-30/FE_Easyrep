import { onCleanup, onMount } from "solid-js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { GridOptions, Grid, GridApi } from "ag-grid-community";
import "./asset/css/GridComponent.css"

const GridComponent = () => {
  let gridDiv: HTMLDivElement | null = null;
  let gridOptions: GridOptions | null = null;
  let gridApi: GridApi | null = null;

  // Function to get users from localStorage and sort by timestamp descending
  const getUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.sort((a: any, b: any) => b.timestamp - a.timestamp);
  };

  // Function to update localStorage with sorted users
  const updateLocalStorage = (users: any[]) => {
    localStorage.setItem("users", JSON.stringify(users));
    // Refresh grid with updated data
    if (gridApi) {
      gridApi.applyTransaction({ update: users });
    }
  };

  // Function to handle role change
  const onRoleChange = (username: string, newRole: string) => {
    const updatedUsers = getUsersFromLocalStorage().map((user: any) => {
      if (user.username === username) {
        return { ...user, role: newRole };
      }
      return user;
    });
    updateLocalStorage(updatedUsers);
  };

  // Cell renderer function for role selection
  const roleCellRenderer = (params: any) => {
    const role = params.data.role || "user";
    const container = document.createElement("div");
    container.className = "select-container";

    const select = document.createElement("select");
    select.className = "role-dropdown";
    select.innerHTML = `
      <option value="admin" ${role === "admin" ? "selected" : ""}>Admin</option>
      <option value="user" ${role === "user" ? "selected" : ""}>User</option>
    `;
    select.addEventListener("change", (event) => {
      const newRole = (event.target as HTMLSelectElement).value;
      onRoleChange(params.data.username, newRole);
    });

    container.appendChild(select);
    return select;
  };

  // Initialize grid on mount
  onMount(() => {
    // Define column definitions and initial data
    gridOptions = {
      columnDefs: [
        { headerName: "Username", field: "username", flex: 1 },
        { headerName: "Email", field: "email", flex: 1 },
        { headerName: "Password", field: "password", flex: 1 },
        {
          headerName: "Role",
          field: "role",
          cellRenderer: roleCellRenderer,
          flex: 1,
        },
      ],
      // Get users from localStorage and sort by timestamp descending
      rowData: getUsersFromLocalStorage(),
      // Callback when grid is ready
      onGridReady: (params) => {
        gridApi = params.api;
      },
      // Default column definitions
      defaultColDef: {
        resizable: true,
      },
    };

    // Create grid if gridDiv is available
    if (gridDiv && gridOptions) {
      new Grid(gridDiv, gridOptions);
    }

    // Cleanup function when component unmounts
    onCleanup(() => {
      if (gridDiv && gridApi) {
        gridDiv.innerHTML = "";
        gridApi.destroy();
      }
    });
  });

  return <div class="ag-theme-alpine full-page-grid" ref={(el) => (gridDiv = el)}></div>;
};

export default GridComponent;
