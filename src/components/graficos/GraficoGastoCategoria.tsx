import { Bar } from 'react-chartjs-2';
import GraficodeBarras from './GraficodeBarras';

const GraficoGastoCategoria = () => {

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

    return <div className="h-100"><Bar options={GraficodeBarras()} data={data} /></div>;
};
export default GraficoGastoCategoria;