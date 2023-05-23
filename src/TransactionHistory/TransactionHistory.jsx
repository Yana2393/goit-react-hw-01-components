import React from 'react';
import PropTypes from "prop-types";
import css from "TransactionHistory/TransactionHistory.module.css"

function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.transactionHistory}>
        <thead className={css.thead}>
          <tr className={css.titles}>
            <th className={css.info}>Type</th>
            <th className={css.info}>Amount</th>
            <th className={css.info}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {items.map(item => (
            <tr key={item.id} className={css.frame}>
              <td className={css.frameItem}>{item.type}</td>
              <td className={css.frameItem}>{item.amount}</td>
              <td className={css.frameItem}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
