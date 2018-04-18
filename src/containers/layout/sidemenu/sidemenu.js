import React from 'react'
import styles from './sidemenu.css'

const sideMenu = (props) => (
  <div className={styles.SideMenu}>
    <header>
      Menu
    </header>
    <ul>
      <li>Tasks</li>
      <li>New Task</li>
    </ul>
  </div>
)

export default sideMenu