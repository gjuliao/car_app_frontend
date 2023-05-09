import React from 'react'
import styles from '../styles/DetailTable.module.css'

export default function DetailTable() {
  return (
    <table className={styles.detailTable}>
      <tbody>
        <tr>
          <td className={styles.keyRow}>Price</td>
          <td className={styles.valueRow}>$26000</td>
        </tr>
        <tr>
          <td className={styles.keyRow}>Brand</td>
          <td className={styles.valueRow}>BMW</td>
        </tr>
        <tr>
          <td className={styles.keyRow}>Year</td>
          <td className={styles.valueRow}>2020</td>
        </tr>
        <tr>
          <td className={styles.keyRow}>Color</td>
          <td className={styles.valueRow}>Red</td>
        </tr>
        
      </tbody>
    </table>
  )
}
