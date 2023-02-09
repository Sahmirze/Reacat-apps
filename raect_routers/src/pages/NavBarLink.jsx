import { NavLink } from 'react-router-dom'
import styles from 'pages/index.module.css'
import NavBarLink from 'routes/NavLink'
function NavBar() {
	return(<>
	<nav className={styles.navbar}>
				<NavBarLink to="/" text="Home" />
				<NavBarLink to="/about" text="About" />
				<NavBarLink to="/login" text="Login" />
				<NavBarLink to="/study" text="Study" />
				<NavBarLink to="/api" text="Api" />
				<NavBarLink to="/starwarsdata" text="StarWarsData" />
	</nav>
	</>)
}
export default NavBar
