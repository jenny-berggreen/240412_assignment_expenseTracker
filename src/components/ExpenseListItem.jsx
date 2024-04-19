import React from 'react'

const ExpenseListItem = ({ expense }) => {

	const { title, amount, date, category } = expense;

  return (
	<> 
	<li>
      <div>Title: {title}</div>
      <div>Amount: {amount}</div>
      <div>Date: {date}</div>
      <div>Category: {category}</div>
    </li>
	</>
	
  )
}

export default ExpenseListItem