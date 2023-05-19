import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props){
    if (props.items.length===0) {
        return <h2 className='expenses-list__fallback'>No items in filtered year</h2>
    }
    return(
        <div>
            <ul className='expenses-list'>
                {props.items.map((expense)=>{
                    return(<ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />)
                })}
            </ul>
        </div>
    )
}

export default ExpensesList