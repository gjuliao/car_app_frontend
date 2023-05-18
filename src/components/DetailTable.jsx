import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/DetailTable.module.css';

const DetailTable = ({ data }) => (
  <table className={styles.detailTable}>
    <tbody>
      <tr>
        <td className={styles.keyRow}>Price</td>
        <td className={styles.valueRow}>
          $
          {data?.price}
        </td>
      </tr>
      <tr>
        <td className={styles.keyRow}>Brand</td>
        <td className={styles.valueRow}>{data?.brand}</td>
      </tr>
      <tr>
        <td className={styles.keyRow}>Year</td>
        <td className={styles.valueRow}>{data?.year}</td>
      </tr>
      <tr>
        <td className={styles.keyRow}>Color</td>
        <td className={styles.valueRow}>{data?.color}</td>
      </tr>

    </tbody>
  </table>
);

DetailTable.propTypes = {
  data: PropTypes.shape(
    {
      price: PropTypes.string,
      brand: PropTypes.string,
      year: PropTypes.string,
      color: PropTypes.string,
    },
  ),
};

DetailTable.defaultProps = {
  data: {
    price: 'Loding...',
    brand: 'Loding...',
    year: 'Loding...',
    color: 'Loding...',
  },
};
export default DetailTable;
