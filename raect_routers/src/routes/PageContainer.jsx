 import { AppBar } from '@mui/material'
import { Container } from '@mui/system'
import styles from 'pages/index.module.css'
import NavBar from 'pages/NavBarLink'


 function PageContainer({children}){
	return(
		<>
		{/* <header className={styles.head} > */}
	
		<AppBar>
		<Container  >
			
				<NavBar />
			
			
		</Container>
		
		</AppBar>
		
		{/* //</header> */}
		<main style={{
			marginTop:100
		}}>{children}</main>
		<footer></footer>
		</>
	)
 }


 export default PageContainer