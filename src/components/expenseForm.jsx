import React from 'react'
import styles from '../styles/style.module.css'
import formStyles from '../styles/expenseForm.module.css'

const ExpenseForm = () => {

  return (
    <>
    <form className={`${formStyles.expense_form} ${styles.flex}`}>
      <fieldset className={`${formStyles.expense_form_container} ${styles.flex} ${styles.flex_column}`}>

        <section className={`${formStyles.form_section} ${styles.flex} ${styles.flex_row}`}>
          <div className={`${formStyles.input_group} ${formStyles.input_group__title} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="title">Title<sup>*</sup></label>
						<input type="text" name='title' placeholder='Ex. bus ticket' className={`${formStyles.input_element}`} />
						<p>Error</p>
          </div>
          <div className={`${formStyles.input_group} ${formStyles.input_group__amount} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="amount">Amount<sup>*</sup></label>
						<input type="text" name='amount' placeholder='Ex. 3.50' className={`${formStyles.input_element}`} />
						<p>Error</p>
          </div>
        </section>

        <div className={`${formStyles.input_group} ${formStyles.input_group__date} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="date">Date<sup>*</sup></label>
						<input type="date" name='date' className={`${formStyles.input_element}`} />
						<p>Error</p>
        </div>

        <div className={`${formStyles.input_group} ${formStyles.input_group__category} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="category">Category</label>
						<select name="category" className={`${formStyles.input_element}`}>
              <option value="noCategory">No category</option>
              <option value="housing">Housing</option>
              <option value="groceries">Groceries</option>
              <option value="transportation">Transportation</option>
              <option value="clothes">Clothes</option>
              <option value="other">Other</option>
            </select>
						<p>Error</p>
          </div>

        <button className={`${formStyles.submit_button} ${styles.flex}`}>Add expense</button>

      </fieldset>
    </form>
    
    </>
	

  )
}

export default ExpenseForm