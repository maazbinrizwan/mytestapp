import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import Cards from "../UI/Cards";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
const Expense = (props) => {
  const data = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {data.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Cards>
    </div>
  );
};
export default Expense;
