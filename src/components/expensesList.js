import * as React from "react";
import Box from "@mui/material/Box";
import ExpensesItem from "./expensesItem";
import Typography from "@mui/material/Typography";

export default function ExpensesList() {
  const [expenses, setExpenses] = React.useState([]);
  React.useEffect(() => {
    fetch("http://127.0.0.1:4500/api/expenses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExpenses(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Box minWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Expenses tracker
      </Typography>
      {expenses.map(
        ({ id, name, amount, color, type, age, periods }) => (
          <ExpensesItem
            key={id}
            name={name}
            amount={amount}
            id={id}
            color={color}
            type={type}
            age={age}
            periods={periods}
          />
        )
      )}
    </Box>
  );
}
