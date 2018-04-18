import React from 'react'
import SideMenu from './sidemenu/sidemenu'
import styles from './layout.css'

const layout = (props) => (
  <div className={styles.Layout}>
    <SideMenu openTaskForm={props.addTaskView} showAllTasks={props.allTaskView}/>
    {props.children}
  </div>
)

export default layout