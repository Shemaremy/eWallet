# Step by step structural guide

1. Login in your account
2. Fetch data from database (default: 0 for everything)

3. Database collections:
- users
- transactions 
- budgets
- categories


-----------------------------------------------------------------------------------------------------------

4. Users collection
- name
- password
- accounts
"accounts": [
    {"type": "Bank Account", "balance": 1200},
    {"type": "Mobile Money", "balance": 300},
    {"type": "Cash", "balance": 100}
]



5. Transactions collection
- _id: (Unique transaction ID)
- amount: (Amount of the transaction)
- type: (Type of transaction: "Income" or "Expense")
- account: (The account used for the transaction, e.g., "Bank Account")
- category: (Main category, e.g., "Food")
- subcategory: (Optional subcategory, e.g., "Groceries")
- date: (Date of the transaction)
- description: (Optional details, e.g., "Bought vegetables")
- created_at: (Timestamp for when the transaction was logged)



6. Budgets collection
- amount: (Budget amount, e.g., $800)
- time_period: (Time range for the budget, e.g., "monthly")
- start_date: (When the budget starts)
- end_date: (When the budget ends)
- total_spent: (Amount already spent in this category for the budget period)



7. Categories collection
- _id: (Unique ID for the category)
- name: (Category name, e.g., "Food")
- subcategories: (Array of subcategories, e.g., ["Groceries", "Restaurants", "Snacks"])

---------------------------------------------------------------------------------------------------------------




8. What to see on front page

- Welcome back 
- Balance for each account
- Budget status/progress
- Favourites
- Recent transactions sorted from the most recent