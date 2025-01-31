interface TablaGastosProps {
    openEditModal: (gasto: any) => void;
}

const TablaGastos = ({ openEditModal }: TablaGastosProps) => {
    const gastos = [
        { fecha: "12/12/2024", categoria: "Ocio", descripcion: "La Niebla, libro de Steven King", recurrente: "No", monto: "S/. 29.99" },
        { fecha: "02/12/2024", categoria: "Servicios", descripcion: "Servicio de Luz", recurrente: "Sí", monto: "S/. 229.99" },
        { fecha: "02/12/2024", categoria: "Servicios", descripcion: "Servicio del agua", recurrente: "Sí", monto: "S/. 129.99" },
        { fecha: "05/12/2024", categoria: "Servicios", descripcion: "Movistar", recurrente: "Sí", monto: "S/. 169.99" },
        { fecha: "05/12/2024", categoria: "Alimentación", descripcion: "Compras del mes", recurrente: "Sí", monto: "S/. 369.99" },
    ];

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead className="table-primary">
                    <tr>
                        <th>Fecha</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Recurrente</th>
                        <th>Monto</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {gastos.map((gasto, index) => (
                        <tr key={index}>
                            <td>{gasto.fecha}</td>
                            <td>{gasto.categoria}</td>
                            <td>{gasto.descripcion}</td>
                            <td>{gasto.recurrente}</td>
                            <td>{gasto.monto}</td>
                            <td>
                                {/* Ícono de edición (lápiz) */}
                                <img 
                                    src="/assets/lapiz.png" 
                                    width="20" 
                                    className="me-2 edit-icon" 
                                    role="button" 
                                    onClick={() => openEditModal(gasto)}
                                />
                                {/* Ícono de eliminación (basura) */}
                                <img 
                                    src="/assets/basura.png" 
                                    width="20" 
                                    className="delete-icon" 
                                    role="button"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaGastos;
