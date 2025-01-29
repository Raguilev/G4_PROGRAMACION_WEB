import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardUsuarioPage from './pages/DashboardUsuarioPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

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
