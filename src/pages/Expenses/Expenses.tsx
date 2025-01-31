import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import ExpenseTable from "./ExpenseTable";
import EditExpenseModal from "./EditExpenseModal";
import AddExpenseModal from "./AddExpenseModal";
import DeleteExpenseModal from "./DeleteExpenseModal";
import styles from "./Expenses.module.css";

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

    const updateExpense = (updatedExpense: Expense) => {
        const updatedExpenses = expenses.map((expense) =>
            expense.id === updatedExpense.id ? updatedExpense : expense
        );
        setExpenses(updatedExpenses);
        localStorage.setItem("gastos", JSON.stringify(updatedExpenses));
        setShowEditModal(false);
    };

    const addExpense = (newExpense: Expense) => {
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem("gastos", JSON.stringify(updatedExpenses));
        setShowAddModal(false);
    };

    const deleteExpense = () => {
        if (expenseToDelete !== null) {
            const updatedExpenses = expenses.filter((expense) => expense.id !== expenseToDelete);
            setExpenses(updatedExpenses);
            localStorage.setItem("gastos", JSON.stringify(updatedExpenses));
            setShowDeleteModal(false);
        }
    };

    return (
        <div className={styles.mainLayout}>
            <Sidebar />
            <div className={styles.content}>
                <h2>Mis Gastos</h2>
    
                <div className={styles.expenseActions}>
                    <button className={styles.filterButton}>🔍 Filtrar</button>
                    <button className={styles.exportButton}>📤 Exportar</button>
                    <button className={styles.addButton} onClick={() => setShowAddModal(true)}>➕ Agregar Gasto</button>
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
                        updateExpense={updateExpense}
                    />
                )}
                {showAddModal && <AddExpenseModal closeModal={() => setShowAddModal(false)} addExpense={addExpense} />}
                {showDeleteModal && <DeleteExpenseModal closeModal={() => setShowDeleteModal(false)} deleteExpense={deleteExpense} />}
            </div>
        </div>
    );};
export default Expenses;
