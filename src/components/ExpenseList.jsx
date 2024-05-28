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