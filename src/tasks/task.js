import React from "react"

const Task = ({title, description, priority}) => (
  <article style={styles.article}>
    <header style={styles.header}>
      <h1 style={styles.header.heading_one}>{title}</h1>
      <p style={styles.header.paragraph}>Urgency - {priority}</p>
    </header>
    <div style={styles.body}>{description}</div>
  </article>
)

const styles = {
  article: {
    backgroundColor: 'green',
    color: 'white'
  },
  header: {
    backgroundColor: 'red',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    heading_one: {
      paddingLeft: '20px'
    },
    paragraph: {
      display: 'grid',
      alignItems: 'center',
    }
  },
  body: {
    padding: '20px'
  }
}

export default Task