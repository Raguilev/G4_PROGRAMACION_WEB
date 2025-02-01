interface HistorialItem {
    id: string;
    nombre: string;
    correo: string;
    fecha: string;
    hora: string;
    accion: string;
  }
  
  const historialData: HistorialItem[] = [
    { id: "001", nombre: "Jessica", correo: "jess@taxes.com", fecha: "12/12/2024", hora: "17:50", accion: "Borrar" },
    { id: "002", nombre: "Jhon", correo: "jon@taxes.com", fecha: "17/12/2024", hora: "19:50", accion: "Agregar" },
    { id: "003", nombre: "Diego", correo: "dieg@taxes.com", fecha: "22/12/2024", hora: "14:20", accion: "Editar" },
    { id: "004", nombre: "Juan", correo: "juan@taxes.com", fecha: "02/12/2024", hora: "13:50", accion: "Borrar" },
    { id: "005", nombre: "Luis", correo: "luis@taxes.com", fecha: "07/12/2024", hora: "12:50", accion: "Borrar" }
  ];
  
  const HistorialTable = ({ data }: { data: HistorialItem[] }) => {
    return (
      <div className="table-responsive">
        <table className="table table-hover rounded-table">
          <thead className="custom-table-header">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
                <td>{item.fecha}</td>
                <td>{item.hora}</td>
                <td>
                  {item.accion === "Borrar" ? (
                    <button className="btn btn-danger btn-sm">Borrar</button>
                  ) : item.accion === "Agregar" ? (
                    <button className="btn btn-success btn-sm">Agregar</button>
                  ) : (
                    <button className="btn btn-warning btn-sm">Editar</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default HistorialTable;
  