import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/admin_sidebar";
import HistorialTable, { HistorialItem } from "../components/tablas/HistorialTable";
const data =
  [
    { id: "001", nombre: "Jessica", correo: "jess@taxes.com", fecha: "12/12/2024", hora: "17:50", accion: "Borrar" },
    { id: "002", nombre: "Jhon", correo: "jon@taxes.com", fecha: "17/12/2024", hora: "19:50", accion: "Agregar" },
    { id: "003", nombre: "Diego", correo: "dieg@taxes.com", fecha: "22/12/2024", hora: "14:20", accion: "Editar" },
    { id: "004", nombre: "Juan", correo: "juan@taxes.com", fecha: "02/12/2024", hora: "13:50", accion: "Borrar" },
    { id: "005", nombre: "Luis", correo: "luis@taxes.com", fecha: "07/12/2024", hora: "12:50", accion: "Borrar" }
  ]

const HistorialAdmin = () => {
  const [historial,setHistorial] = useState<HistorialItem[]>(data)

  const httpObtenerHistorial = async () => {
    const url = " https://script.google.com/macros/s/AKfycbwnViGs2imFRKitmPDKS1PZvZmkrIS3kBbMgnhv-vSRWBk0KGfLbIyeCdOrYzLsh-mR/exec?entity=proyectos"
    const resp = await fetch(url)
    const listaHistorial = await resp.json()
    setHistorial(listaHistorial)
    console.log(listaHistorial)
  }

  useEffect( ()=> {
    httpObtenerHistorial()
  })

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <Sidebar />
        </div>

        <div className="col-md-9 col-lg-10 py-4 d-flex flex-column">
          <div className="container">
            <div className="row">
              <h2 className="mb-4">Historial</h2>
              <HistorialTable data={historial} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorialAdmin;
