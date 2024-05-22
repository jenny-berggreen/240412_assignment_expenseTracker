import { useState, useEffect } from 'react'
import styles from './styles/style.module.css'
import appStyles from './App.module.css'
import fontStyles from './styles/fontSizes.module.css'
import ExpenseForm from './components/ExpenseForm.jsx'
import ExpenseList from './components/ExpenseList.jsx'
import TotalExpenses from './components/TotalExpenses.jsx'
import CategoryExpenses from './components/CategoryExpenses.jsx'
import Toast from './components/Toast.jsx'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [toast, setToast] = useState(null);

  // retrieve expenses from local storage
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []); // run only once when component mounts

  // store expenses in local storage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]); // run whenever expenses state changes

  // function to show toast message
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000); // hide toast after 3 seconds
  };

  // add new expense
  const addExpense = (newExpense) => {
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    showToast('added', 'New expense added');
  };

  // delete expense
  const deleteExpense = (expenseIdToDelete) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== expenseIdToDelete);
    setExpenses(updatedExpenses);
    showToast('deleted', 'Expense deleted');
  };

  return (
    <>
      {toast && (
        <Toast type={toast.type} message={toast.message} />
      )}

    <div className={`${appStyles.app_container} ${styles.flex} ${styles.flex_column}`}>
      {/* NAVBAR */}
      <nav className={`${appStyles.navbar} ${styles.flex}`}>
        <span className={`${appStyles.nav_header} ${fontStyles.l}`}>Expense Tracker</span>
      </nav>

      <div className={`${appStyles.main_container} ${styles.flex} ${styles.flex_row}`}>
        {/* CATEGORIES */}
        <div className={`${appStyles.category_container} ${styles.flex} ${styles.flex_column}`}>
          <h2 className={`${appStyles.gap_header} ${fontStyles.l}`}>Total category expenses</h2>
          <CategoryExpenses expenses={expenses} />
        </div>

        <section className={`${appStyles.form_and_list_section} ${styles.flex} ${styles.flex_column}`}>
          <h2 className={`${appStyles.gap_header}`}></h2>
          <div className={`${appStyles.form_and_list_container} ${styles.grid}`}>
            {/* TOTAL EXPENSES */}
            <div className={`${appStyles.total_expenses_container} ${styles.flex}`}>
              <TotalExpenses expenses={expenses} />
            </div>

            {/* EXPENSE FORM */}
            <div className={`${appStyles.expense_form_container} ${styles.flex} ${styles.flex_column}`}>
              <h2 className={`${fontStyles.l}`}>Add expense</h2>
              <ExpenseForm onAddExpense={addExpense} />
            </div>

            {/* DISPLAY EXPENSES */}
            <div className={`${appStyles.expense_list_container} ${styles.flex} ${styles.flex_column}`}>
              <h2 className={`${fontStyles.l}`}>All expenses</h2>
              <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
            </div>
          </div>
        </section>
        
      </div>
    </div>
    </>
  )
}

export default App
