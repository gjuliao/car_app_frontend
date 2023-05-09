import React from 'react';
import styles from '../styles/DetailTable.module.css';

export default function DetailTable({ data }) {
  return (
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
}
