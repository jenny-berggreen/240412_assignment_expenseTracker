import React from 'react'
import styles from '../styles/style.module.css'
import listStyles from '../styles/expenseList.module.css'

const ExpenseListItem = ({ expense }) => {

	const { title, amount, date, category } = expense;

  return (
	<> 
	<li className={`${listStyles.expense_list_row} ${styles.flex} ${styles.flex_row}`}>
	  	<div className={`${listStyles.title_date_container} ${styles.flex} ${styles.flex_row}`}>
			<span>{date}</span>
			<span>{title}</span>
		</div>
		<div className={`${listStyles.category_container} ${styles.flex}`}>
			<span>{category}</span>
		</div>
		<div className={`${listStyles.amount_container} ${styles.flex}`}>
			<span>${amount}</span>
		</div>
		<div className={`${listStyles.button_container} ${styles.flex}`}>
			<button className={`${listStyles.delete_button}`}>Delete</button>
		</div>
    </li>
	</>
	
  )
}

export default ExpenseListItem