import { createSignal, onMount } from "solid-js";
import AgGridSolid from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./gridcomponent.css";
import Sidebar from "./sidebar";
import "boxicons/css/boxicons.min.css";

const GridComponent = () => {
  const [rowData, setRowData] = createSignal<any[]>([]);

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


  onMount(() => {
    loadUserData();
    window.addEventListener("storage", handleStorageChange);
  });

  
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
    <div class="page-container">
      <Sidebar />
      <div class="content">
        <h1>User List</h1> 
        <div class="grid-wrapper ag-theme-alpine">
          {rowData().length > 0 ? <AgGridSolid columnDefs={columnDefs} rowData={rowData()} defaultColDef={defaultColDef} onCellValueChanged={(event: any) => updateUser(event)} /> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
