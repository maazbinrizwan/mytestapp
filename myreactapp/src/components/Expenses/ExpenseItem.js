import React,{useState} from "react";
import "./ExpenseItem.css";
import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem= (props) => {
const [title,setTitle] = useState(props.title);

const clickHandler=()=>{
  setTitle('Updated');

}

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Cards>
  );
}

export default ExpenseItem;