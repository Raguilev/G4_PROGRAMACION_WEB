const GraficodeBarras = () => {
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
                    font: { size: 15 },
                },
            },
            y: {
                grid: { display: true },
                beginAtZero: true,
                ticks: {
                    font: { size: 15 },
                },
            },
        },
    };
    return options
}
export default GraficodeBarras