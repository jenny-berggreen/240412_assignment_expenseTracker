import React from 'react'
import styles from '../styles/style.module.css'
import listStyles from '../styles/expenseList.module.css'
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({ expenses, onDeleteExpense }) => {

	// sort expenses by date (newest first)
    const sortedExpenses = expenses.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
	<>
	
	<ul className={`${listStyles.expense_list_container}`}>
		{sortedExpenses.length > 0 && sortedExpenses.map((expense) => (
          <ExpenseListItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
        ))}

		{sortedExpenses.length === 0 && <p>No expenses to display.</p>}
	</ul>
    
	</>
  )
}

export default ExpenseList

{/* <div className={`${listStyles.expense_list_container}`}>
		<span className={`${listStyles.expense_list_row} ${styles.flex} ${styles.flex_row}`}>
			<div className={`${listStyles.title_date_container} ${listStyles.list_row_item__title_date}`}>
				<span>dd/mm/yy</span>
				<span>Rent April</span>
			</div>
			<div className={`${listStyles.category_container} ${listStyles.list_row_item__category} ${styles.flex}`}>
				<span>Housing</span>
			</div>
			<div className={`${listStyles.amount_container} ${listStyles.list_row_item__amount} ${styles.flex}`}>
				<span>$3.50</span>
			</div>
			<div className={`${listStyles.button_container} ${listStyles.list_row_item__button} ${styles.flex}`}>
				<button className={`${listStyles.delete_button}`}>Delete</button>
			</div>
		</span>
	</div> */}