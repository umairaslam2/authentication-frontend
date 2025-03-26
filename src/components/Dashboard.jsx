import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import monthlyData from "../data";  // Importing monthly data from data.ts

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [yearlySummary, setYearlySummary] = useState([]);
  const [monthSummary, setMonthSummary] = useState({});
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);
  const [showYearEndSummary, setShowYearEndSummary] = useState(false);

  const calculateSummary = () => {
    const monthSummaryTemp = {};
    const yearlySummaryTemp = [];
    let totalProfitLossTemp = 0;

    // Iterate over months in the monthlyData
    Object.keys(monthlyData).forEach((month) => {
      let monthPurchased = 0;
      let monthSold = 0;
      let monthProfitLoss = 0;
      let monthShares = {}; // For tracking shares and their cost basis

      monthlyData[month].forEach((transaction) => {
        const { type, symbol, quantity, price, date } = transaction;

        if (type === "BUY") {
          // Track the shares purchased
          if (!monthShares[symbol]) monthShares[symbol] = { quantity: 0, totalCost: 0 };
          monthShares[symbol].quantity += quantity;
          monthShares[symbol].totalCost += price * quantity;
          monthPurchased += price * quantity;
        } else if (type === "SELL") {
          // If shares are available for selling, calculate profit/loss
          if (monthShares[symbol] && monthShares[symbol].quantity >= quantity) {
            const avgCost = monthShares[symbol].totalCost / monthShares[symbol].quantity;
            const profitLoss = quantity * (price - avgCost); // Profit or loss for the sold shares
            monthProfitLoss += profitLoss;
            monthSold += price * quantity; // Add the amount for the sold shares
            monthShares[symbol].quantity -= quantity;
            monthShares[symbol].totalCost -= avgCost * quantity;

            totalProfitLossTemp += profitLoss; // Accumulate overall profit/loss
          }
        }
      });

      monthSummaryTemp[month] = {
        purchased: monthPurchased.toFixed(2),
        sold: monthSold.toFixed(2),
        profitLoss: monthProfitLoss.toFixed(2),
        sharesRemaining: Object.keys(monthShares).length > 0
          ? Object.entries(monthShares).map(([symbol, { quantity }]) => ({ symbol, quantity }))
          : [],
      };

      // Collect yearly summary data (sell transactions)
      Object.entries(monthShares).forEach(([symbol, { quantity, totalCost }]) => {
        if (quantity > 0) {
          yearlySummaryTemp.push({
            symbol,
            month,
            quantity,
            totalCost: totalCost.toFixed(2),
            soldAmount: monthSold.toFixed(2),
            profitLoss: monthProfitLoss.toFixed(2),
          });
        }
      });
    });

    setMonthSummary(monthSummaryTemp);
    setYearlySummary(yearlySummaryTemp);
    setTotalProfitLoss(totalProfitLossTemp.toFixed(2));
  };

  useEffect(() => {
    calculateSummary();
  }, []);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const toggleYearEndSummary = () => {
    setShowYearEndSummary(!showYearEndSummary);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", color: "#333" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Stock Dashboard</h2>

      {/* Month Dropdown */}
      <div style={{ marginBottom: "20px" }}>
        <label>Select Month: </label>
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          style={{
            padding: "5px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          {Object.keys(monthlyData).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Monthly Summary */}
      <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
        <h3>Summary for {selectedMonth}</h3>
        <table
          border="1"
          style={{
            width: "100%",
            textAlign: "center",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "#333",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#e0e0e0" }}>
              <th>Month</th>
              <th>Amount Purchased</th>
              <th>Amount Sold</th>
              <th>Shares Remaining</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(monthSummary).map((month) => (
              <tr key={month}>
                <td>{month}</td>
                <td>{monthSummary[month].purchased}</td>
                <td>{monthSummary[month].sold}</td>
                <td>
                  {monthSummary[month].sharesRemaining.map((share) => (
                    <div key={share.symbol}>{`${share.symbol}: ${share.quantity} shares`}</div>
                  ))}
                </td>
                <td>{monthSummary[month].profitLoss}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Year-End Summary Button */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={toggleYearEndSummary}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Toggle Year-End Summary
        </button>
      </div>

      {/* Year-End Summary */}
      {showYearEndSummary && (
        <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#fff", borderRadius: "5px" }}>
          <h3>Year-End Summary</h3>
          <table
            border="1"
            style={{
              width: "100%",
              textAlign: "center",
              borderCollapse: "collapse",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#333",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#e0e0e0" }}>
                <th>Symbol</th>
                <th>Month</th>
                <th>Quantity</th>
                <th>Total Cost</th>
                <th>Sold Amount</th>
                <th>Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {yearlySummary.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.symbol}</td>
                  <td>{entry.month}</td>
                  <td>{entry.quantity}</td>
                  <td>{entry.totalCost}</td>
                  <td>{entry.soldAmount}</td>
                  <td>{entry.profitLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p><strong>Total Profit/Loss for the Year:</strong> ${totalProfitLoss}</p>
        </div>
      )}

      {/* Monthly Chart */}
      <BarChart
        width={600}
        height={300}
        data={Object.keys(monthSummary).map((month) => ({
          month,
          purchased: monthSummary[month].purchased,
          sold: monthSummary[month].sold,
        }))}
        style={{ marginTop: "20px", backgroundColor: "#fff", borderRadius: "5px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="purchased" fill="#8884d8" />
        <Bar dataKey="sold" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
