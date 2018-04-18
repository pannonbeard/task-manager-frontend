import React, { Fragment } from 'react'
import SideMenu from '../../components/sidemenu/sidemenu'

import styles from './layout.css'

const layout = (props) => (
  <div className={styles.Layout}>
    <SideMenu />
    {props.children}
  </div>
)

export default layout