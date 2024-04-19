import React from 'react'
import styles from '../styles/style.module.css'
import categoryStyles from '../styles/categoryExpenses.module.css'

const CategoryExpenses = () => {
  return (
	<div className={`${categoryStyles.categories_container} ${styles.flex} ${styles.flex_column}`}>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__housing}`}>$245</span>
			<span className={`${categoryStyles.category_title}`}>Housing</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__groceries}`}>$245</span>
			<span className={`${categoryStyles.category_title}`}>Groceries</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__transportation}`}>$245</span>
			<span className={`${categoryStyles.category_title}`}>Transportation</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__clothes}`}>$245</span>
			<span className={`${categoryStyles.category_title}`}>Clothes</span>
		</div>
		<div className={`${categoryStyles.category_card} ${styles.flex} ${styles.flex_column}`}>
			<span className={`${categoryStyles.category_amount} ${categoryStyles.category_amount__other}`}>$245</span>
			<span className={`${categoryStyles.category_title}`}>Other</span>
		</div>
	</div>
  )
}

export default CategoryExpenses