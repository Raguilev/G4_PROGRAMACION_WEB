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
    return options
}
export default GraficodeBarras