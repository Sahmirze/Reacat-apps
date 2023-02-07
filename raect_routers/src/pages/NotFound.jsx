import styles from './index.module.css'

function NotFound(){
	return(
		<>
			<div className={styles.notFound}>404 Page NotFound</div>
			<a href="/">Go Home</a>
		</>
	)
 }

 export default NotFound