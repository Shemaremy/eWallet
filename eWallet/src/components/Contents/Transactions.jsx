import React, { useState } from "react";
import "./Allcontent.css";

function AddTransaction() {
  const [transaction, setTransaction] = useState({
    amount: "",
    account: "",
    category: "",
    subcategory: "",
    type: "Expense", // Default to Expense
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction Submitted:", transaction);
    // Reset form
    setTransaction({
      amount: "",
      account: "",
      category: "",
      subcategory: "",
      type: "Expense",
      date: "",
    });
  };

  return (
    <div className="add-transaction-panel">
      <h1>Add Transaction</h1>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Transaction Type</label>
          <select
            name="type"
            value={transaction.type}
            onChange={handleInputChange}
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={transaction.amount}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Account</label>
          <select
            name="account"
            value={transaction.account}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Account
            </option>
            <option value="Bank Account">Bank Account</option>
            <option value="Mobile Money">Mobile Money</option>
            <option value="Cash">Cash</option>
          </select>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={transaction.category}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div className="form-group">
          <label>Subcategory</label>
          <input
            type="text"
            name="subcategory"
            placeholder="Enter subcategory (optional)"
            value={transaction.subcategory}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
