import React from 'react'
import styles from '../styles/style.module.css'
import listStyles from '../styles/expenseList.module.css'

const ExpenseListItem = ({ expense, onDeleteExpense }) => {

	const { title, amount, date, category } = expense;

	// define class based on expense category
    let categoryClass;

    if (category === 'Transportation') {
        categoryClass = 'transportation';
    } else if (category === 'Housing') {
        categoryClass = 'housing';
    } else if (category === 'Groceries') {
        categoryClass = 'groceries';
    } else if (category === 'Clothes') {
        categoryClass = 'clothes';
    } else if (category === 'Other'){
        categoryClass = 'other';
    } else {
        categoryClass = 'noCategory';
    }

	// format date to dd.mm.yyyy
	const formatDate = (dateString) => {
		let date = new Date(dateString);
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();

		if(day < 10) {
			day = '0' + day;
		}

		if(month < 10) {
			month = '0' + month;
		}
		
		return `${day}.${month}.${year}`;
	  };

	const handleDelete = () => {
		// call onDelete function with the expense to be deleted
		onDeleteExpense(expense);
	  };

  return (
	<> 
	<li className={`${listStyles.expense_list_row} ${styles.flex} ${styles.flex_row}`}>
	  	<div className={`${listStyles.list_item} ${listStyles.title_date_container} ${styles.flex} ${styles.flex_row}`}>
			<span>{formatDate(expense.date)}</span>
			<span>{title}</span>
		</div>
		<div className={`${listStyles.list_item} ${listStyles.category_container} ${styles.flex}`}>
			<span className={`${listStyles[categoryClass]} ${styles.flex}`}>{category}</span>
		</div>
		<div className={`${listStyles.list_item} ${listStyles.amount_container} ${styles.flex}`}>
			<span>${amount}</span>
		</div>
		<div className={`${listStyles.list_item} ${listStyles.button_container} ${styles.flex}`}>
			<button className={`${listStyles.delete_button}`} onClick={handleDelete}>Delete</button>
		</div>
    </li>
	</>
	
  )
}

export default ExpenseListItem