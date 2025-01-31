import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DashboardUsuarioPage from './pages/DashboardUsuarioPage'
import DashboardAdminPage from './pages/DashboardAdminPage'
import HistorialAdmin from './pages/HistorialAdmin'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DashboardUsuarioPage/>
  </StrictMode>,
)
