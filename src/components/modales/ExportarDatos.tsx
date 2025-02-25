import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import "bootstrap/dist/css/bootstrap.min.css";

interface ExportarDatosProps {
  data: any[];
  filename?: string;
}

const ExportarDatos: React.FC<ExportarDatosProps> = ({ data, filename = "egresos" }) => {
  
  const handleExportPDF = () => {
    const pdf = new jsPDF();
    pdf.text("Reporte de Egresos", 10, 10);
    const tableData = data.map(item => [item.date, item.category, item.description, item.recurring ? "Sí" : "No", `S/. ${item.amount.toFixed(2)}`]);

    (pdf as any).autoTable({
      head: [["Fecha", "Categoría", "Descripción", "Recurrente", "Monto"]],
      body: tableData
    });

    pdf.save(`${filename}.pdf`);
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(data.map(item => ({
      Fecha: item.date,
      Categoría: item.category,
      Descripción: item.description,
      Recurrente: item.recurring ? "Sí" : "No",
      Monto: `S/. ${item.amount.toFixed(2)}`
    })));

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${filename}.csv`);
  };

  return (
    <div className="btn-group">
      <button className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
        📤 Exportar
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" onClick={handleExportPDF}>📄 Exportar a PDF</button></li>
        <li><button className="dropdown-item" onClick={handleExportCSV}>📊 Exportar a CSV</button></li>
      </ul>
    </div>
  );
};

export default ExportarDatos;
