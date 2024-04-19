import { useState, useEffect } from 'react'
import styles from './styles/style.module.css'
import appStyles from './App.module.css'
import ExpenseForm from './components/ExpenseForm.jsx'
import ExpenseList from './components/ExpenseList.jsx'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // retrieve expenses from local storage when component mounts
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
      setIsValid(true); // set isValid to true if expenses exist
    }
  }, []); // run only once on component mount

  useEffect(() => {
    // store expenses in local storage whenever expenses state changes
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]); // run whenever expenses state changes

  // add new expense
  const addExpense = (newExpense) => {
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    setIsValid(true); // set isValid to true after adding expense
  };

  return (
    <>
    <div className={`${appStyles.app_container} ${styles.flex} ${styles.flex_column}`}>
      {/* NAVBAR */}
      <nav className={`${appStyles.navbar} ${styles.flex}`}>
        <span className={`${appStyles.nav_header}`}>Expense Tracker</span>
      </nav>

      <div className={`${appStyles.main_container} ${styles.flex} ${styles.flex_row}`}>
        {/* CATEGORIES */}
        <div className={`${appStyles.category_container} ${styles.flex} ${styles.flex_column}`}>
          <h2>Total category expenses</h2>
        </div>

        <div className={`${appStyles.form_and_list_container} ${styles.grid}`}>
          {/* TOTAL EXPENSES */}
          <div className={`${appStyles.total_expenses_container}`}>
            Total expenses container
          </div>

          {/* EXPENSE FORM */}
          <div className={`${appStyles.expense_form_container} ${styles.flex} ${styles.flex_column}`}>
            <h2>Add expense</h2>
            <ExpenseForm onAddExpense={addExpense} setIsValid={setIsValid} />
          </div>

          {/* DISPLAY EXPENSES */}
          <div className={`${appStyles.expense_list_container} ${styles.flex} ${styles.flex_column}`}>
            <h2>All expenses</h2>
            <ExpenseList expenses={expenses} isValid={isValid} />
          </div>
        </div>

      </div>

      
    </div>
    
      
    </>
  )
}

export default App
