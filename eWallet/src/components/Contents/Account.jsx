import React, { useState } from "react";
import "./Allcontent.css";

function Account() {
    const [accounts, setAccounts] = useState([]);
    const [newAccount, setNewAccount] = useState("");

    const handleAddAccount = () => {
        if (newAccount.trim() !== "") {
            setAccounts([...accounts, newAccount.trim()]);
            setNewAccount("");
        }
    };

    const handleDeleteAccount = (index) => {
        const updatedAccounts = accounts.filter((_, i) => i !== index);
        setAccounts(updatedAccounts);
    };

    return (
        <div className="account_panel">
            <h2>Manage Accounts</h2>

            <div className="add_account">
                <input
                    type="text"
                    placeholder="Enter account name"
                    value={newAccount}
                    onChange={(e) => setNewAccount(e.target.value)}
                />
                <button onClick={handleAddAccount}>Add Account</button>
            </div>

            {accounts.length > 0 ? (
                <ul className="accounts_list">
                    {accounts.map((account, index) => (
                        <li key={index} className="account_item">
                            <span>{account}</span>
                            <button
                                className="delete_button"
                                onClick={() => handleDeleteAccount(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No accounts added yet.</p>
            )}
        </div>
    );
}

export default Account;
