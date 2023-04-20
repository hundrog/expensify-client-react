import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ExpensesItem(props) {
  return (
    <Card
      index={props.id}
      sx={{ width: "100%", backgroundColor: props.color, mb: 3 }}
    >
      <CardContent>
        <Box sx={{ flexGrow: 1, pa: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Typography variant="h5" display="flex">
                {props.name}
              </Typography>
            </Grid>
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
