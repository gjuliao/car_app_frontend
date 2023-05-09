import React from 'react'
import DetailTable from '../components/DetailTable'
import styles from '../styles/Detail.module.css'

export default function Detail() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Jaguar F-Type</h1>
      <p className={styles.subtitle}>- $xx deposit upon any xxxx purchase</p>
      <DetailTable />
    </section>
  )
}
