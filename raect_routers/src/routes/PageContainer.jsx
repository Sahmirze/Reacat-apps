 import { AppBar } from '@mui/material'
import styles from 'pages/index.module.css'
import NavBar from 'pages/NavBarLink'


 function PageContainer({children}){
	return(
		<>
		{/* <header className={styles.head} > */}
		<AppBar>
		<NavBar />
		</AppBar>
		
		{/* //</header> */}
		<main style={{
			marginTop:40
		}}>{children}</main>
		<footer></footer>
		</>
	)
 }


 export default PageContainer