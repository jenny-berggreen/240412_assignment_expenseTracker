import React from 'react'
import styles from '../styles/style.module.css'
import categoryStyles from '../styles/categoryExpenses.module.css'

const CategoryExpenses = ({ expenses }) => {

	let housingTotal = 0;
	let groceriesTotal = 0;
	let transportationTotal = 0;
	let clothesTotal = 0;
	let otherTotal = 0;

	for (const expense of expenses) {
		if(expense.category === 'housing') {
			const amount = parseFloat(expense.amount);
			housingTotal += amount;
		} else if(expense.category === 'groceries') {
			const amount = parseFloat(expense.amount);
			groceriesTotal += amount;
		} else if(expense.category === 'transportation') {
			const amount = parseFloat(expense.amount);
			transportationTotal += amount;
		} else if(expense.category === 'clothes') {
			const amount = parseFloat(expense.amount);
			clothesTotal += amount;
		} else if(expense.category === 'other') {
			const amount = parseFloat(expense.amount);
			otherTotal += amount;
		}
	}
	
	housingTotal = housingTotal.toFixed(2);
	groceriesTotal = groceriesTotal.toFixed(2);
	transportationTotal = transportationTotal.toFixed(2);
	clothesTotal = clothesTotal.toFixed(2);
	otherTotal = otherTotal.toFixed(2);

  return (
	<div className={`${categoryStyles.categories_container} ${styles.flex} ${styles.flex_column}`}>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__housing}`}>${housingTotal}</span>
			<span className={`${categoryStyles.category_title}`}>Housing</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__groceries}`}>${groceriesTotal}</span>
			<span className={`${categoryStyles.category_title}`}>Groceries</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__transportation}`}>${transportationTotal}</span>
			<span className={`${categoryStyles.category_title}`}>Transportation</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__clothes}`}>${clothesTotal}</span>
			<span className={`${categoryStyles.category_title}`}>Clothes</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__other}`}>${otherTotal}</span>
			<span className={`${categoryStyles.category_title}`}>Other</span>
		</div>
	</div>
  )
}

export default CategoryExpenses