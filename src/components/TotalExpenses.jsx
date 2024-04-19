import React from 'react'
import styles from '../styles/style.module.css'
import totalExpensesStyles from '../styles/totalExpenses.module.css'

const TotalExpenses = () => {
  return (
	<div className={`${totalExpensesStyles.total_expenses_container} ${styles.flex} ${styles.flex_column}`}>
		<span className={`${totalExpensesStyles.total_expenses_header}`}>Total Expenses</span>
		<span className={`${totalExpensesStyles.total_expenses_amount}`}>$230.45</span>
	</div>
  )
}

export default TotalExpenses