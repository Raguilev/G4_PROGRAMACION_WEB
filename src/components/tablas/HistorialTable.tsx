export interface HistorialItem {
    id: string;
    nombre: string;
    correo: string;
    fecha: string;
    hora: string;
    accion: string;
  }
  
  interface HistorialTableProps{
    data : HistorialItem[]
  }
  
  const HistorialTable = (props : HistorialTableProps) => {
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
            {props.data.map((item:HistorialItem) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
                <td>{item.fecha}</td>
                <td>{item.hora}</td>
                <td>
                  {item.accion === "Borrar" ? (
                    <p className="text-danger m-0 fw-bold">Borrar ❌</p>
                  ) : item.accion === "Agregar" ? (
                    <p className="text-success m-0 fw-bold">Agregar ✚</p>
                  ) : (
                    <p className="m-0 fw-bold" style={{ color: '#ff822d' }}>Editar ✏️</p>
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
  