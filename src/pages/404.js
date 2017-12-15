import React from 'react'
import styles from './404.module.css'


const NotFoundPage = () => (
  <div className={styles.notFoundPage}>
    <div className={styles.img}>
      <img src='https://media.giphy.com/media/GAkO90wQ0JMd2/giphy.gif'/>
      <div className={styles.txt}>404</div>
    </div>
  </div>
)

export default NotFoundPage
