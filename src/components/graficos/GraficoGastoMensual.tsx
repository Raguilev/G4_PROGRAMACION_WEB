import { Bar } from 'react-chartjs-2';
import GraficodeBarras from '../graficos/GraficodeBarras';

const GraficoGastoMensual = () => {
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

    return <div className="h-100"><Bar options={GraficodeBarras()} data={data}/></div>
}
export default GraficoGastoMensual;