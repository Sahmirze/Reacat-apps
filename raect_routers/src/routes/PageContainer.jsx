 import styles from 'pages/index.module.css'
import { NavLink } from 'react-router-dom'

 function PageContainer({children}){
	return(
		<>
		<header className={styles.head} >
			<nav className={styles.navbar}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/login">Login</NavLink>
			</nav>
		</header>
		<main>{children}</main>
		<footer></footer>
		</>
	)
 }
 export default PageContainer