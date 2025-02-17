import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface GraficoUsuariosProps {
  monthlyData: number[];
}

const GraficoUsuarios = (props : GraficoUsuariosProps) => {
  const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  const data = {
    labels,
    datasets: [
      {
        label: "Usuarios nuevos por mes",
        data: props.monthlyData,
        backgroundColor: "#4285F4",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true, max: 1000, ticks: { stepSize: 200 } },
      x: { grid: { display: false } },
    },
  };

  return (
    <div style={{ height: "250px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoUsuarios;
