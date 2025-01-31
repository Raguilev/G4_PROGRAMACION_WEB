import Sidebar from "../components/sidebar/admin_sidebar"
import "./HistorialAdmin.css"
const HistorialAdmin = () =>{
    return <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-md-3 shadow-sm">
                    <Sidebar />
                </div>

                <div className="col-md-9 py-4">
                    <h2 className="mb-4">Historial</h2>
                    <div className="table">
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
                                <tr>
                                    <td>001</td>
                                    <td>Jessica</td>
                                    <td>jess@taxes.com</td>
                                    <td>12/12/2024</td>
                                    <td>17:50</td>
                                    <td><button className="btn btn-danger btn-sm">Borrar</button></td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Jhon</td>
                                    <td>jon@taxes.com</td>
                                    <td>17/12/2024</td>
                                    <td>19:50</td>
                                    <td><button className="btn btn-success btn-sm">Agregar</button></td>
                                </tr>
                                <tr>
                                    <td>003</td>
                                    <td>Diego</td>
                                    <td>dieg@taxes.com</td>
                                    <td>22/12/2024</td>
                                    <td>14:20</td>
                                    <td><button className="btn btn-warning btn-sm">Editar</button></td>
                                </tr>
                                <tr>
                                    <td>004</td>
                                    <td>Juan</td>
                                    <td>juan@taxes.com</td>
                                    <td>02/12/2024</td>
                                    <td>13:50</td>
                                    <td><button className="btn btn-danger btn-sm">Borrar</button></td>
                                </tr>
                                <tr>
                                    <td>005</td>
                                    <td>Luis</td>
                                    <td>luis@taxes.com</td>
                                    <td>07/12/2024</td>
                                    <td>12:50</td>
                                    <td><button className="btn btn-danger btn-sm">Borrar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
}
export default HistorialAdmin