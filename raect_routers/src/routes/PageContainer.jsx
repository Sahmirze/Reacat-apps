 import styles from 'pages/index.module.css'

 function PageContainer({children}){
	return(
		<>
		<header className={styles.head} >
			<nav className={styles.navbar}>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/states">States</a>
			</nav>
		</header>
		<main>{children}</main>
		<footer></footer>
		</>
	)
 }
 export default PageContainer