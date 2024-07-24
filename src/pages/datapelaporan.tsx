import { createSignal, onMount } from "solid-js";
import AgGridSolid from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./datapelaporan.css";
import Sidebar from "./sidebar";


const ReportsPage = () => {
  const [reports, setReports] = createSignal<any[]>([]);

  onMount(() => {
    const savedReports = JSON.parse(localStorage.getItem("reports") || "[]");
    console.log("Fetched reports from localStorage: ", savedReports);
    setReports(savedReports);
    console.log("State reports: ", reports());
  });

  const columnDefs = [
    { headerName: "Judul", field: "title" },
    { headerName: "Deskripsi", field: "description", sortable: true, filter: true },
    { headerName: "Tanggal Kejadian", field: "date", sortable: true, filter: true },
    { headerName: "Lokasi", field: "location", sortable: true, filter: true },
    { headerName: "Lampiran", field: "fileName", sortable: true, filter: true },
  ];

  return (
    <section class="reports-page">
      <Sidebar />
      <h2>Daftar Laporan</h2>
      <div class="ag-theme-alpine" style={{ height: "570px", width: "110%" }}>
        {reports().length > 0 ? <AgGridSolid rowData={reports()} columnDefs={columnDefs} /> : <p>Loading...</p>}
      </div>
    </section>
  );
};

export default ReportsPage;
