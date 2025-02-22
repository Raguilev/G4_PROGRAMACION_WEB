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
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [expenseToDelete, setExpenseToDelete] = useState<number | null>(null);
    const [showFilterModal, setShowFilterModal] = useState(false);

    const httpObtenerExpenses = async () => {
        const url = "http://localhost:5000/expenses"
        const resp = await fetch(url)
        const data = await resp.json()
        if (data.msg == "") {
            const listaExpenses = data.expenses
            setExpenses(listaExpenses)
            console.log(listaExpenses)
            console.log(listaExpenses[1].Category.name)
        }else {
            console.error(`Error al obtener proyectos: ${data.msg}`)
        }
    }

    useEffect( ()=> {
        httpObtenerExpenses()
    },[])

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
                 {/* 
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
                    */}
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
