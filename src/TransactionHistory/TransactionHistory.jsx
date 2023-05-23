import React from 'react';
import '../TransactionHistory/TransactionHistory.css';

function TransactionHistory({ items }) {
  return (
    <div className="container">
      <table className="transaction-history">
        <thead className="thead">
          <tr className="titles">
            <th className="info">Type</th>
            <th className="info">Amount</th>
            <th className="info">Currency</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {items.map(item => (
            <tr key={item.id} className="frame">
              <td className="frame-item">{item.type}</td>
              <td className="frame-item">{item.amount}</td>
              <td className="frame-item">{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
