import React from "react"
import styles from './task.css'

const Task = ({title, description, priority, remove}) => (
  <article className={styles.Article}>
    <header className={styles.Header}>
      <h1 className={styles.HeadingOne}>{title}</h1>
      <button className={[styles.Button, styles.Delete].join(' ')} onClick={remove}>X</button>
      <p className={styles.Paragraph}>Urgency - {priority}</p>
    </header>
    <div className={styles.Body}>{description}</div>
  </article>
)

export default Task