import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./Reports.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Reports() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [chartData, setChartData] = useState(null);

    const handleGenerateReport = () => {
        // Simulate fetching filtered transactions
        const filteredTransactions = [
            { id: 1, date: "2025-01-01", category: "Food", amount: 50 },
            { id: 2, date: "2025-01-05", category: "Transport", amount: 20 },
            { id: 3, date: "2025-01-08", category: "Groceries", amount: 80 },
        ];
        setTransactions(filteredTransactions);

        // Prepare chart data
        const dates = filteredTransactions.map((t) => t.date);
        const amounts = filteredTransactions.map((t) => t.amount);

        setChartData({
            labels: dates,
            datasets: [
                {
                    label: "Expenses",
                    data: amounts,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 2,
                },
            ],
        });
    };

    return (
        <div className="reports_panel">
            <h2>Transactions Summary</h2>

            <div className="filter_section">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder="Start Date"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    placeholder="End Date"
                />
                <button onClick={handleGenerateReport}>Generate Report</button>
            </div>

            <div className="transactions_summary">
                <h3>Summary</h3>
                {transactions.length > 0 ? (
                    <ul>
                        {transactions.map((transaction) => (
                            <li key={transaction.id}>
                                {transaction.date} - {transaction.category}: $
                                {transaction.amount}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No transactions found for the selected period.</p>
                )}
            </div>

            {chartData && (
                <div className="chart_container">
                    <h3>Visualized Analysis</h3>
                    <Line data={chartData} className="chart_canvas" />
                </div>
            )}
        </div>
    );
}

export default Reports;
