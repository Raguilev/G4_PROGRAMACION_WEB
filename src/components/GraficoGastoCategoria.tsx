import { Bar } from 'react-chartjs-2';

const GraficoGastoCategoria = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 13 },
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: { size: 13 },
                },
            },
        },
    };

    const labels = ['Servicios', 'Ocio', 'Alimentación'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Gastos por categoría',
                data: [4000, 2000, 3000],
                backgroundColor: ['#007bff', '#6c757d', '#ffc107'],
            },
        ],
    };

    return <div h-100><Bar options={options} data={data} /></div>;
};
export default GraficoGastoCategoria;