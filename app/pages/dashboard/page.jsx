"use client";
import "../dashboard/globals.css";
import { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import Summary from "./Summary";
import { Filter } from "./Filter";
import Navbar from "./Navbar";

export default function page() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    category: "all",
  });

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const date = new Date(transaction.date);
    return (
      date.getMonth() === filter.month &&
      date.getFullYear() === filter.year &&
      (filter.category === "all" || transaction.category === filter.category)
    );
  });

  const income = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expenses = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  return (
    <div className="space-y-6">
      <div>
        <Navbar/>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Income & Expense Tracker
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <TransactionForm onSubmit={addTransaction} />
        </div>
        <div className="lg:col-span-2">
          <Summary income={income} expenses={expenses} />
          
          <div className="mt-6">
            {/* <ChartView income={income} expenses={expenses} /> */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <Filter filter={filter} setFilter={setFilter} />
          </div>
            <TransactionList transactions={filteredTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
