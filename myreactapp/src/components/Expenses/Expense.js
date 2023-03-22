import React, { useState } from "react";
import Cards from "../UI/Cards";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
const Expense = (props) => {
  const data = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList  items={filteredExpense}/>
      </Cards>
    </div>
  );
};
export default Expense;
