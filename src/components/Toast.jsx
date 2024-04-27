import React from 'react'
import styles from '../styles/style.module.css'
import toastStyles from '../styles/toast.module.css'
import fontStyles from '../styles/fontSizes.module.css'

const Toast = () => {
  return (
	<div className={`${toastStyles.toast_container} ${styles.flex}`}>
      <div className={`${toastStyles.toast} ${fontStyles.l}`}></div>
    </div>
  )
}

export default Toast