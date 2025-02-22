import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface GraficoUsuariosProps {
  monthlyData: Record<string, number>;
}

const GraficoUsuarios = (props : GraficoUsuariosProps) => {
  const monthNames: Record<string, string> = {
    "1": "Ene",
    "2": "Feb",
    "3": "Mar",
    "4": "Abr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Ago",
    "9": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dic"
  }

  const sortedKeys = Object.keys(props.monthlyData).sort((a, b) => Number(a) - Number(b));
  const labels = sortedKeys.map(key => monthNames[key] || key);
  const dataMes = sortedKeys.map(key => props.monthlyData[key]);

  const data = {
    labels,
    datasets: [
      {
        label: "Usuarios nuevos por mes",
        data: dataMes,
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
      y: { beginAtZero: true, max: Math.max(...dataMes), ticks: { stepSize: 200 } },
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
