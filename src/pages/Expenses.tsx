import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/user_sidebar";
import ExpenseTable from "../components/tablas/ExpenseTable";
import EditExpenseModal from "../components/modales/EditExpenseModal";
import AddExpenseModal from "../components/modales/AddExpenseModal";
import DeleteExpenseModal from "../components/modales/DeleteExpenseModal";
import ModalFiltrarGastos from "../components/modales/ModalFiltrarGastos";
import ExportarDatos from "../components/modales/ExportarDatos";
import "bootstrap/dist/css/bootstrap.min.css";

interface Expense {
    id: number;
    date: string;
    category: string;
    description: string;
    recurring: boolean;
    amount: number;
}

const initialExpenses: Expense[] = [
    { id: 1, date: "2024-12-12", category: "Ocio", description: "Libro de Stephen King", recurring: false, amount: 29.99 },
    { id: 2, date: "2024-12-02", category: "Servicios", description: "Servicio de luz", recurring: true, amount: 229.99 },
    { id: 3, date: "2024-12-02", category: "Servicios", description: "Servicio de agua", recurring: true, amount: 129.99 },
    { id: 4, date: "2024-12-05", category: "Servicios", description: "Movistar", recurring: true, amount: 169.99 },
    { id: 5, date: "2024-12-05", category: "Alimentación", description: "Compras del mes", recurring: true, amount: 369.99 },
];

const Expenses = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [expenseToDelete, setExpenseToDelete] = useState<number | null>(null);
    const [showFilterModal, setShowFilterModal] = useState(false);

    useEffect(() => {
        const storedUser = sessionStorage.getItem("usuario");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate("/");
        }

        const storedExpenses = localStorage.getItem("gastos");
        if (storedExpenses) {
            setExpenses(JSON.parse(storedExpenses));
        } else {
            setExpenses(initialExpenses);
            localStorage.setItem("gastos", JSON.stringify(initialExpenses));
        }
    }, [navigate]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 bg-light vh-100">
                    <Sidebar />
                </div>  

                <div className="col-md-10 p-4">
                    <h2 className="mb-4">Mis Gastos</h2>

                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-outline-primary" onClick={() => setShowFilterModal(true)}>🔍 Filtrar</button>
                        <ExportarDatos data={expenses} filename="gastos" />
                        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>➕ Agregar Gasto</button>
                    </div>


                    <ExpenseTable
                        expenses={expenses}
                        openEdit={(expense) => {
                            setSelectedExpense(expense);
                            setShowEditModal(true);
                        }}
                        openDelete={(expenseId) => {
                            setExpenseToDelete(expenseId);
                            setShowDeleteModal(true);
                        }}
                    />

                    {showEditModal && selectedExpense && (
                        <EditExpenseModal
                            expense={selectedExpense}
                            closeModal={() => setShowEditModal(false)}
                            updateExpense={(updatedExpense) => {
                                const updatedExpenses = expenses.map((expense) =>
                                    expense.id === updatedExpense.id ? updatedExpense : expense
                                );
                                setExpenses(updatedExpenses);
                                localStorage.setItem("gastos", JSON.stringify(updatedExpenses));
                            }}
                        />
                    )}

                    {showAddModal && (
                        <AddExpenseModal
                            closeModal={() => setShowAddModal(false)}
                            addExpense={(newExpense) => {
                                setExpenses([...expenses, newExpense]);
                                localStorage.setItem("gastos", JSON.stringify([...expenses, newExpense]));
                            }}
                        />
                    )}

                    {showDeleteModal && (
                        <DeleteExpenseModal
                            closeModal={() => setShowDeleteModal(false)}
                            deleteExpense={() => {
                                if (expenseToDelete !== null) {
                                    setExpenses(expenses.filter((expense) => expense.id !== expenseToDelete));
                                    localStorage.setItem("gastos", JSON.stringify(expenses.filter((expense) => expense.id !== expenseToDelete)));
                                }
                            }}
                        />
                    )}

                    {showFilterModal && (
                        <ModalFiltrarGastos showModal={showFilterModal} closeModal={() => setShowFilterModal(false)} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Expenses;
