import { NavLink } from 'react-router-dom'
import styles from 'pages/index.module.css'
import NavBarLink from 'routes/NavLink'
import { Stack } from '@mui/system'
import { useContext } from 'react'
import { DataContext } from 'context/DataContext'
function NavBar() {

	const value=useContext(DataContext)
	return(<>
	<nav className={styles.navbar}>
		<Stack justifyContent={'space-between'} direction={'row'} flexWrap={'wrap'}>
				<NavBarLink to="/" text="Home" />
				<NavBarLink to="/about" text="About" />
				<NavBarLink to="/login" text="Login" />
				<NavBarLink to="/study" text="Study" />
				<NavBarLink to="/api" text="Api" />
				<NavBarLink to="/miu" text="Material Ui" />
				<NavBarLink to="/starwarsdata" text="StarWarsData" />
				<p>{value.ad}</p>
		</Stack>


	</nav>
	</>)
}
export default NavBar
