import React from 'react'
import styles from '../styles/style.module.css'
import listStyles from '../styles/expenseList.module.css'

const ExpenseListItem = ({ expense }) => {

	const { title, amount, date, category } = expense;

  return (
	<> 
	<li className={`${listStyles.expense_list_row} ${styles.flex} ${styles.flex_row}`}>
      <div>Title: {title}</div>
      <div>Amount: {amount}</div>
      <div>Date: {date}</div>
      <div>Category: {category}</div>
    </li>
	</>
	
  )
}

export default ExpenseListItem