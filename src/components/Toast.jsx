import React from 'react'
import styles from '../styles/style.module.css'
import toastStyles from '../styles/toast.module.css'
import fontStyles from '../styles/fontSizes.module.css'

const Toast = ({ type, message }) => {
	let toastClassName;
  
	// set toast class based on type
	if (type === 'added') {
	  toastClassName = ` ${toastStyles.toast__added}`;
	} else if (type === 'deleted') {
	  toastClassName = ` ${toastStyles.toast__deleted}`;
	}
  
	return (
		<div className={`${toastStyles.toast_container} ${styles.flex}`}>
		{message && (
		  <div className={`${toastStyles.toast} ${toastClassName} ${fontStyles.l}`}>
			{message}
		  </div>
		)}
	  </div>
	);
  };

export default Toast