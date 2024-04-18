import { useState } from 'react'
import styles from './styles/style.module.css'
import appStyles from './App.module.css'
import ExpenseForm from './components/ExpenseForm.jsx'

function App() {

  return (
    <>
    <div className={`${appStyles.app_container} ${styles.flex} ${styles.flex_column}`}>
      <nav className={`${appStyles.navbar} ${styles.flex}`}>
        <span className={`${appStyles.nav_header}`}>Expense Tracker</span>
      </nav>

      <div className={`${styles.flex} ${styles.flex_row}`}>
        <div className={`${appStyles.category_container} ${styles.flex} ${styles.flex_column}`}>
          <h2>Total category expenses</h2>
        </div>
      </div>

      <ExpenseForm />
    </div>
    
      
    </>
  )
}

export default App
