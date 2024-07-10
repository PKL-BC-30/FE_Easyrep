import { createSignal, onMount } from "solid-js";
import AgGridSolid from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../pages/asset/css/GridManagement.css";

const GridManagement = () => {
  const [rowData, setRowData] = createSignal<any[]>([]);

  onMount(() => {
    loadUserData();
    window.addEventListener("storage", handleStorageChange);
  });

  const loadUserData = () => {
    const savedData = localStorage.getItem("users");
    if (savedData) {
      const parsedData = JSON.parse(savedData).map((user: any) => ({
        ...user,
        role: user.role || "User", // Default role to "User" if not specified
      }));
      setRowData(parsedData);
    }
  };

  const handleStorageChange = () => {
    loadUserData();
  };

  const updateRowData = (newData: any[]) => {
    setRowData(newData);
    localStorage.setItem("users", JSON.stringify(newData));
    window.dispatchEvent(new Event("storage"));
  };

  const columnDefs = [
    { field: "username", headerName: "Username", editable: true },
    { field: "email", headerName: "Email", editable: true },
    { field: "password", headerName: "Password", editable: false },
    {
      headerName: "Role",
      field: "role",
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Admin", "User"],
      },
    },
    {
      headerName: "Actions",
      cellRenderer: (params: any) => {
        const container = document.createElement("div");
        container.classList.add("action-buttons");

        const updateButton = document.createElement("button");
        updateButton.innerText = "Update";
        updateButton.classList.add("action-button", "update-button");
        updateButton.addEventListener("click", () => updateUser(params));

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("action-button", "delete-button");
        deleteButton.addEventListener("click", () => deleteUser(params.data));

        container.appendChild(updateButton);
        container.appendChild(deleteButton);

        return container;
      },
    },
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 150,
  };

  const updateUser = (params: any) => {
    console.log("Update user:", params.data);
    params.api.stopEditing();
    const updatedData = rowData().map((user) => (user.email === params.data.email ? { ...params.data } : user));
    updateRowData(updatedData);
  };

  const deleteUser = (userToDelete: any) => {
    const updatedData = rowData().filter((user) => user.email !== userToDelete.email);
    updateRowData(updatedData);
  };

  return (
    <div class="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      {rowData().length > 0 ? <AgGridSolid columnDefs={columnDefs} rowData={rowData()} defaultColDef={defaultColDef} onCellValueChanged={(event: any) => updateUser(event)} /> : <p>Loading...</p>}
    </div>
  );
};

export default GridManagement;
