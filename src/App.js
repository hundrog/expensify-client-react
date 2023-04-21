import * as React from "react";
import { Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/appLayout";
import ExpensesList from './components/expensesList';
import OutlinedCard from './components/expensesDetail';

export default function App() {
  return (
    <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route index element={<ExpensesList />} />
            <Route path="expenses" element={<ExpensesList />} />
            <Route path="expenses/:id" element={<OutlinedCard />} />
          </Route>
      </Routes>
  );
}