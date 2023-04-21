import * as React from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

export default function ExpensesDetail() {
  const params = useParams();
  const [expense, setExpense] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://127.0.0.1:4500/api/expenses/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExpense(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Box component="form">
      {/* <ExpensesItem
        key={expense.id}
        name={expense.name}
        amount={expense.amount}
        id={expense.id}
        age={expense.age}
        periods={expense.periods}
        color={expense.color}
        type={expense.type}
      /> */}
      <InputLabel htmlFor="component-simple">Name</InputLabel>
      <TextField disabled variant="filled" value={expense.name} sx={{ width: "100%", mb:3 }}/>
      <InputLabel htmlFor="component-simple">Amount</InputLabel>
      <TextField disabled variant="filled" value={expense.amount} sx={{ width: "100%", mb:3 }}/>
      <InputLabel htmlFor="component-simple">Category</InputLabel>
      <TextField disabled variant="filled" value={expense.type} sx={{ width: "100%", mb:3 }}/>
      <InputLabel htmlFor="component-simple">Age/Periods</InputLabel>
      <TextField disabled variant="filled" value={`${expense.age}/${expense.periods}`} sx={{ width: "100%", mb:3 }}/>
    </Box>
  );
}
