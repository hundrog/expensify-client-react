import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ExpensesMenu from "./expensesMenu";

export default function ExpensesItem(props) {
  return (
    <Card
      index={props.id}
      sx={{ width: "100%", backgroundColor: props.color, mb: 3 }}
    >
      <CardHeader
        action={<ExpensesMenu id={props.id}/>}
        title={props.name}
      />
      <CardContent>
        <Box sx={{ flexGrow: 1, pa: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4} display="flex" justifyContent="center">
              <Typography>{props.type}</Typography>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="center">
              <Typography>
                {props.age} / {props.periods}
              </Typography>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="center">
              <Typography>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(props.amount/100)}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
