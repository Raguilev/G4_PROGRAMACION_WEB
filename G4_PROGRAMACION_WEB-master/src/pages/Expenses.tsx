import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/user_sidebar";
import ExpenseTable, { Expense } from "../components/tablas/ExpenseTable";
import EditExpenseModal from "../components/modales/EditExpenseModal";
import AddExpenseModal from "../components/modales/AddExpenseModal";
import DeleteExpenseModal from "../components/modales/DeleteExpenseModal";
import ModalFiltrarGastos from "../components/modales/ModalFiltrarGastos";
import ExportarDatos from "../components/modales/ExportarDatos";
import "bootstrap/dist/css/bootstrap.min.css";

const Expenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [expenseToDelete, setExpenseToDelete] = useState<number | null>(null);

    // 🔥 Obtener `user_id` desde sessionStorage
    const userId = JSON.parse(sessionStorage.getItem("usuario") || "{}").usuarioId || null;

    const httpObtenerExpenses = async () => {
        if (!userId) return; // 🔥 No cargar si no hay usuario

        const url = `http://localhost:5000/expenses/${userId}`;
        try {
            const resp = await fetch(url);
            const data = await resp.json();

            if (data.msg === "") {
                setExpenses(data.expenses);
                setFilteredExpenses(data.expenses); // Se inicializa el estado filtrado con todos los gastos
                console.log("📌 Gastos cargados:", data.expenses);
            } else {
                console.error("⚠️ Error al obtener gastos:", data.msg);
            }
        } catch (error) {
            console.error("❌ Error al conectar con el servidor:", error);
        }
    };

    // ✅ Llamada a la API para obtener gastos filtrados
    const httpFiltrarExpenses = async (filters: { category?: string; date?: string; minAmount?: number; maxAmount?: number }) => {
        if (!userId) return;
        
        const params = new URLSearchParams();
        if (filters.category) params.append("category", filters.category);
        if (filters.date) params.append("date", filters.date);
        if (filters.minAmount !== undefined) params.append("minAmount", filters.minAmount.toString());
        if (filters.maxAmount !== undefined) params.append("maxAmount", filters.maxAmount.toString());

        const url = `http://localhost:5000/expenses/filter/${userId}?${params.toString()}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            if (data.msg === "") {
                setFilteredExpenses(data.expenses);
                console.log("📌 Gastos filtrados:", data.expenses);
            } else {
                console.error("⚠️ Error al filtrar gastos:", data.msg);
            }
        } catch (error) {
            console.error("❌ Error al conectar con el servidor:", error);
        }
    };

    useEffect(() => {
        httpObtenerExpenses();
    }, []);

    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 p-4">
                    <h2 className="mb-4">Mis Gastos</h2>

                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-outline-primary" onClick={() => setShowFilterModal(true)}>🔍 Filtrar</button>
                        <ExportarDatos data={filteredExpenses} filename="gastos" />
                        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>➕ Agregar Gasto</button>
                    </div>

                    <ExpenseTable
                        expenses={filteredExpenses} // ✅ Se muestra la lista filtrada
                        openEdit={(expense) => {
                            setSelectedExpense(expense);
                            setShowEditModal(true);
                        }}
                        openDelete={(expenseId) => {
                            setExpenseToDelete(expenseId);
                            setShowDeleteModal(true);
                        }}
                    />

                    {showAddModal && (
                        <AddExpenseModal
                            closeModal={() => setShowAddModal(false)}
                            refreshExpenses={httpObtenerExpenses} // 🔥 Se recarga la lista después de agregar
                        />
                    )}

                    {showDeleteModal && (
                        <DeleteExpenseModal
                            expenseId={expenseToDelete} // ✅ Pasamos el ID del gasto
                            closeModal={() => setShowDeleteModal(false)}
                            refreshExpenses={httpObtenerExpenses} // ✅ Recarga la lista después de eliminar
                        />
                    )}

                    {showFilterModal && (
                        <ModalFiltrarGastos 
                            showModal={showFilterModal} 
                            closeModal={() => setShowFilterModal(false)}
                            applyFilters={httpFiltrarExpenses} // ✅ Aplica filtros desde el backend
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Expenses;
