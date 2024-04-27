import React from 'react'
import styles from '../styles/style.module.css'
import totalExpensesStyles from '../styles/totalExpenses.module.css'
import fontStyles from '../styles/fontSizes.module.css'

const TotalExpenses = ({ expenses }) => {

	// calculate total
	let totalAmount = 0;

	for (const expense of expenses) {
		const amount = parseFloat(expense.amount);
		
		totalAmount += amount;
	}

	totalAmount = totalAmount.toFixed(2);

  return (
	<div className={`${totalExpensesStyles.total_expenses_container} ${styles.flex} ${styles.flex_column}`}>
		<span className={`${totalExpensesStyles.total_expenses_header} ${fontStyles.l}`}>Total Expenses</span>
		<span className={`${totalExpensesStyles.total_expenses_amount} ${fontStyles.xxl}`}>${totalAmount}</span>
	</div>
  )
}

export default TotalExpenses