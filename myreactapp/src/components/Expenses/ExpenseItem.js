import "./ExpenseItem.css";
import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </Cards>
  );
};

export default ExpenseItem;
