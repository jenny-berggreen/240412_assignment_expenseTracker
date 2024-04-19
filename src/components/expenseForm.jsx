import React, { useState } from 'react'
import styles from '../styles/style.module.css'
import formStyles from '../styles/expenseForm.module.css'

const ExpenseForm = ({ onAddExpense }) => {
  // expense data object
	const [expenseData, setExpenseData] = useState({
		title: '',
		amount: '',
		date: '',
		category: '-'
	});

  // errors object
	const [errors, setErrors] = useState({
		titleError: '',
		amountError: '',
		dateError: ''
	});

  let validated = false;

  // validation function
  const validateForm = () => {
    const clonedErrors = {...errors};

    if(!expenseData.title.trim()) { // if empty
			clonedErrors.titleError = 'Title is required!';
		} else if(expenseData.title.length > 20) {
			clonedErrors.titleError = 'Max. 20 characters!';
		}

    if(!expenseData.amount.trim()) { // if empty
			clonedErrors.amountError = 'Amount is required!';
		} else if(expenseData.amount.length > 5) {
			clonedErrors.amountError = 'Max. 5 characters!';
		}

    if(!expenseData.date.trim()) { // if empty
			clonedErrors.dateError = 'Date is required!';
		}
    
    setErrors(clonedErrors); // update errors state

    if (!clonedErrors.titleError && !clonedErrors.amountError && !clonedErrors.dateError) {
      validated = true;
    }
  }

  // store data
	const handleChange = (e) => {
		const {name, value} = e.target; // access name and value

		setErrors((prevErrors) => ({...prevErrors, [`${name}Error`]: ''}))

    setExpenseData((prev) => ({...prev, [name]: name === 'category' ? (value === '' ? '-' : value) : value }));
	}

  // handle submit
	const handleSubmit = (e) => {
		e.preventDefault();

		validateForm();

    if (validated) {
      console.log(expenseData);
    }

    // add new expense
    onAddExpense(expenseData);

    // clear form after adding expense
    
	}

  return (
    <>
    <form className={`${formStyles.expense_form} ${styles.flex}`} onSubmit={handleSubmit}>
      <fieldset className={`${formStyles.expense_form_container} ${styles.flex} ${styles.flex_column}`}>

        <section className={`${formStyles.form_section} ${styles.flex} ${styles.flex_row}`}>
          <div className={`${formStyles.input_group} ${formStyles.input_group__title} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="title">Title<sup>*</sup></label>
						<input type="text" name='title' placeholder='Ex. bus ticket' className={`${formStyles.input_element}`} onChange={handleChange} />
						<p>{errors.titleError}</p>
          </div>
          <div className={`${formStyles.input_group} ${formStyles.input_group__amount} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="amount">Amount<sup>*</sup></label>
						<input type="number" name='amount' placeholder='Ex. 3.50' className={`${formStyles.input_element}`} onChange={handleChange} />
						<p>{errors.amountError}</p>
          </div>
        </section>

        <div className={`${formStyles.input_group} ${formStyles.input_group__date} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="date">Date<sup>*</sup></label>
						<input type="date" name='date' className={`${formStyles.input_element}`} onChange={handleChange} />
						<p>{errors.dateError}</p>
        </div>

        <div className={`${formStyles.input_group} ${formStyles.input_group__category} ${styles.flex} ${styles.flex_column}`}>
            <label htmlFor="category">Category</label>
						<select name="category" className={`${formStyles.input_element}`} onChange={handleChange}>
              <option value="">No category</option>
              <option value="housing">Housing</option>
              <option value="groceries">Groceries</option>
              <option value="transportation">Transportation</option>
              <option value="clothes">Clothes</option>
              <option value="other">Other</option>
            </select>
          </div>

        <button className={`${formStyles.submit_button} ${styles.flex}`}>Add expense</button>

      </fieldset>
    </form>
    
    </>
	

  )
}

export default ExpenseForm