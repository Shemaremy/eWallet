import React, { useState } from "react";
import "./Allcontent.css";

function Budgets() {
  const [generalBudget, setGeneralBudget] = useState(0);
  const [spent, setSpent] = useState(0);

  const handleBudgetUpdate = (e) => {
    e.preventDefault();
    const newBudget = e.target.elements.budgetAmount.value;
    setGeneralBudget(newBudget);
    e.target.reset();
  };

  return (
    <div className="budgets_panel">
      <h1>General Budget</h1>
      
      <div className="set-budget">
        <h2>Set Your Monthly Budget</h2>
        <form className="budget-form" onSubmit={handleBudgetUpdate}>
          <input
            type="number"
            name="budgetAmount"
            placeholder="Enter budget amount"
            required
          />
          <button type="submit">Set Budget</button>
        </form>
        <p className="current-budget">Current Budget: ${generalBudget}</p>
      </div>

      <div className="budget-overview">
        <h2>Budget Overview</h2>
        <p>
          Spent: <strong>${spent}</strong> / ${generalBudget}
        </p>
        <div
          className="progress-bar"
          style={{
            background: `linear-gradient(to right, #4caf50 ${
              (spent / generalBudget) * 100
            }%, #e0e0e0 ${(spent / generalBudget) * 100}%)`,
          }}
        ></div>
        {spent > generalBudget && (
          <p className="warning">Warning: You have exceeded your budget!</p>
        )}
      </div>
    </div>
  );
}

export default Budgets;
