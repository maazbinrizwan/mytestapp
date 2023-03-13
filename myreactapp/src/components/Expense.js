import ExpenseItem from "./ExpenseItem";
import Cards from "./Cards";
import "./Expense.css";
function Expense(props) {
  const data = props.items;
  return (
    <Cards className="expenses">
      <ExpenseItem
        title={data[0].title}
        amount={data[0].amount}
        date={data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data[1].title}
        amount={data[1].amount}
        date={data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data[2].title}
        amount={data[2].amount}
        date={data[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data[3].title}
        amount={data[3].amount}
        date={data[3].date}
      ></ExpenseItem>
    </Cards>
  );
}
export default Expense;
