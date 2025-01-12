import React, { useState, useEffect } from "react";

import moment from 'moment';
import './Analysis.css';


import Budgets from "./Contents/Budgets";
import Transactions from "./Contents/Transactions";
import Categories from "./Contents/Categories";
import Account from "./Contents/Account";
import Reports from "./Contents/Reports";


function Analysis() {








const PanelState = {
    DASHBOARD: 'dashboard',
    BUDGETS: 'budgets',
    TRANSACTIONS: 'transactions',
    CATEGORIES: 'categories',
    ACCOUNT: 'account',
    REPORTS: 'reports',
    SIGNOUT: 'signout'
};



    //const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [panelChange, setPanelChange] = useState(PanelState.DASHBOARD);

    //const navigate = useNavigate();





















    
/*
    // ------------- Fetching user data from database ---------------------------------------------------------
    useEffect(() => {
        const fetchUserData = async () => {

            const token = localStorage.getItem('token');

            if (!token) {
                alert('Access token not found');
                navigate('/accounts');
                return;
            }

            try {
                const response = await fetch('https://git-bit.glitch.me/fetchdata', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                
                const data = await response.json();

                if (!response.ok) {
                    if ((JSON.stringify(data)).includes('Invalid token')) {
                        //alert("Token expired")
                        navigate('/accounts');
                    } else {
                        alert(JSON.stringify(data));
                    }
                    throw new Error('Failed to fetch user data');
                } else {
                    const storedYesterday = localStorage.getItem("yesterday");

                    setGoal(data.goal)
                    setGoalStart(data.goal.startDate);
                    setGoalEnd(data.goal.endDate);
                    setGoalTarget(data.goal.Target);
                    setGoalName(data.goal.goalName)
                    
                    setUsername(data.username);
                    setProfile(data.profile);
                    //console.log(data.contributions.toLocaleString())
                    setContributions(data.contributions.toLocaleString());
                    setRepositories(data.repositories);
                    
                    setSettings(data.settings)

                    // Parse and set the 'yesterday' value
                    const yesterdayValue = parseInt(storedYesterday, 10);
                    setYesterday(yesterdayValue);

                    
                    const formattedContributions = data.calendar.map(week => 
                        Object.values(week.contributionDays).map(day => ({
                            date: moment(day.date).format('YYYY-MM-DD'),
                            count: day.contributionCount
                        }))
                    ).flat();


                    // Get years since the user started using github
                    const currentYear = new Date().getFullYear();
                    const uniqueYears = [currentYear, currentYear - 1];
                    setYears(uniqueYears);

                    setAllCalendarData(formattedContributions);

                    setCalendarData(formattedContributions);
                                    
                    if (yesterdayValue < 1) {
                        setStatus(<i className="fa-solid fa-thumbs-down"></i>);
                    }

                    setLoading(false); 
    
                }
    
            } catch (error) {
                console.error('Error:', error);
                //console.error(error);
            }
        };
    
        fetchUserData();
    }, []);
*/ 


    if (loading) {
        return <p>Loading...</p>;
    }
    








    // ----------- Mobile burger options ------------------------------------------------------

    const toggleMobileMenu = () => {
        const menu_btn = document.querySelector('.hamburger');
        const show_panel = document.querySelector('.analysis-nav-mobilepanel');
        const fixed_page = document.querySelector('body');
        menu_btn.classList.toggle('is-active');
        show_panel.classList.toggle('is-active');
        fixed_page.classList.toggle('body-fixed');
    };













// ------ Toggling the left nav panel buttons ----------------------------------------    

const handlePanelChange = (newState) => {
    setPanelChange(newState);
    const menu_btn = document.querySelector('.hamburger');
    const show_panel = document.querySelector('.analysis-nav-mobilepanel');
    const fixed_page = document.querySelector('body');
    const analysis_height = document.querySelector('.parent-analysis');
    menu_btn.classList.remove('is-active');
    show_panel.classList.remove('is-active');
    fixed_page.classList.remove('body-fixed');

    if (newState === 'signout') {
        localStorage.removeItem('token');
        navigate('/');
    }

    if (newState === 'goals' || newState === 'notifications' || newState === 'settings' || newState === 'help') {
        analysis_height.classList.add('filledpage');
    } else {
        analysis_height.classList.remove('filledpage');
    }
    

};



















    const isActive = (panel) => panelChange === panel ? 'active' : '';
    




    // Left panel wrapper
    const LeftPanel = (
        <>
    <div className="basic-options">
        <p 
            className={`director ${isActive(PanelState.DASHBOARD)}`} 
            onClick={() => handlePanelChange(PanelState.DASHBOARD)}>
            Dashboard
        </p>
        <p 
            className={`director ${isActive(PanelState.BUDGETS)}`} 
            onClick={() => handlePanelChange(PanelState.BUDGETS)}>
            Set Budget
        </p>
        <p 
            className={`director ${isActive(PanelState.TRANSACTIONS)}`} 
            onClick={() => handlePanelChange(PanelState.TRANSACTIONS)}>
            Add Transaction
        </p>
        <p 
            className={`director ${isActive(PanelState.CATEGORIES)}`} 
            onClick={() => handlePanelChange(PanelState.CATEGORIES)}>
            Add Category
        </p>
    </div>
    <div className="bottom-settings">
        <p 
            className={`director ${isActive(PanelState.ACCOUNT)}`} 
            onClick={() => handlePanelChange(PanelState.ACCOUNT)}>
            Add Account
        </p>
        <p 
            className={`director ${isActive(PanelState.REPORTS)}`} 
            onClick={() => handlePanelChange(PanelState.REPORTS)}>
            Generate Reports
        </p>
        <p 
            className={`director signout_director ${isActive(PanelState.SIGNOUT)}`} 
            onClick={() => handlePanelChange(PanelState.SIGNOUT)}>
            Sign out &nbsp;&nbsp; <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </p>
    </div>
</>

    );


    

    const dashboardContent = (
        <>
            
            <div className="top-headers">
                <h1 className="welcome-header">Welcome back, Eric</h1>
                <p className="main-date">Unomunsi</p>
            </div>
            <div className="three-panels-section">
                <div className="first-panel-analysis">
                    <h4>Balance: $1500</h4>
                    <p>Bank account: $1000</p>
                    <p>Mobile Money: $300</p>
                    <p>Cash: $200</p>
                </div>
                <div className="second-panel-analysis">
                    <h4>Budget status</h4>
                    <p>Current budget set: $1000</p>
                    <p>Total expenses: $600</p>
                    <p>Status: <i className="fa-solid fa-thumbs-up"></i></p>
                </div>
                <div className="third-panel-analysis">
                    <h4>Favourite transactions</h4>
                    <p>Food: 3 transaction(s)</p>
                    <p>Clothes: 2 transaction(s)</p>
                    <p>Movies: 1 transaction(s)</p>
                </div>
            </div>
            <div className="recent-transactions">
                <h4>Recent Transactions</h4>
                <ul className="transaction-list">
                    {[
                        { id: 1, date: "2025-01-10", category: "Food", amount: "$50", account: "Mobile Money" },
                        { id: 2, date: "2025-01-09", category: "Transport", amount: "$20", account: "Bank Account" },
                        { id: 3, date: "2025-01-08", category: "Shopping", amount: "$120", account: "Cash" },
                    ].map((transaction) => (
                    <li key={transaction.id} className="transaction-item">
                        <div className="transaction-info">
                        <span className="transaction-date">{transaction.date}</span>
                        <span className="transaction-category">{transaction.category}</span>
                        </div>
                        <div className="transaction-amount">{transaction.amount}</div>
                        <div className="transaction-account">{transaction.account}</div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );















































    return (
        <div className="parent-analysis">        
            <div className="analysis-nav-mobilepanel">
                <div className="analysis-options-mobile">
                    {LeftPanel}
                </div>
            </div>
            <div className="left-part-panel">
                <div className="left-wrapper">
                    <div className="profile-section">
                        <div className="img-container">
                            <img  className="profile-pic"/>
                        </div>
                        <h3>Eric</h3>
                    </div>
                    {LeftPanel}
                </div>
            </div>
            <div className="right-part-panel">
                <div className="Mobile-navbar">
                    <div className="left-part-nav">
                        <div className="burger">
                            <div className="hamburger_container">
                                <button className="hamburger" onClick={toggleMobileMenu}>
                                    <div className="bar"></div>
                                </button>
                            </div>
                        </div>
                        <h2>Eric</h2>
                    </div>
                    <div className="right-part-nav">
                        <i className="fa-solid fa-bell" onClick={() => handlePanelChange(PanelState.NOTIFICATIONS)}></i>
                        <i className="fa-solid fa-shield-halved" onClick={() => handlePanelChange(PanelState.BADGES)}></i>
                        <div className="img-container">
                            <img alt="Pic" className="profile-pic"/>
                        </div>                            
                    </div>
                </div>
                <div className="right-wrapper">
                    {panelChange === 'dashboard' && dashboardContent}
                    {panelChange === 'budgets' && <Budgets />}
                    {panelChange === 'transactions' && <Transactions />}
                    {panelChange === 'categories' && <Categories />}
                    {panelChange === 'account' && <Account />}
                    {panelChange === 'reports' && <Reports />}
                </div>
            </div>
        </div>
    );
}

export default Analysis;
