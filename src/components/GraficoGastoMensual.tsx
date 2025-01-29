import { Bar } from 'react-chartjs-2';

const GraficoGastoMensual = () => {
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
                grid: { display: true },
                beginAtZero: true,
                ticks: {
                    font: { size: 13 },
                },
            },
        },
    };

    const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Gastos mensuales',
                data: [3000, 1500, 2000, 2500, 2800, 1800, 1000, 2200, 2700, 2900, 3200, 1500],
                backgroundColor: '#007bff',
            },
        ],
    };

    return <div className='h-100'><Bar options={options} data={data}/></div>
}
export default GraficoGastoMensual;