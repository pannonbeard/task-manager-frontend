import React from "react"
import styles from './task.css'

const Task = ({title, description, priority}) => (
  <article className={styles.Article}>
    <header className={styles.Header}>
      <h1 className={styles.HeadingOne}>{title}</h1>
      <p className={styles.Paragraph}>Urgency - 1</p>
    </header>
    <div className={styles.Body}>{description}</div>
  </article>
)

export default Task