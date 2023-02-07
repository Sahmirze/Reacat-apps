 import styles from 'pages/index.module.css'
import NavBar from 'pages/NavBarLink'


 function PageContainer({children}){
	return(
		<>
		<header className={styles.head} >
		<NavBar />
		</header>
		<main>{children}</main>
		<footer></footer>
		</>
	)
 }


 export default PageContainer