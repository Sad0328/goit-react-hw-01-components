import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

 const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistoryTable}>
    <thead className={styles.headersRow}>
      <tr className={styles.valuesRow}>
        <th className={styles.columnHeader}>Type</th>
        <th className={styles.columnHeader}>Amount</th>
        <th className={styles.columnHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.valuesRow}>
          <td className={styles.columnValue}>{item.type}</td>
          <td className={styles.columnValue}>{item.amount}</td>
          <td className={styles.columnValue}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

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

export default TransactionHistory
