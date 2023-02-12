import { NavLink } from 'react-router-dom'
import styles from 'pages/index.module.css'
import NavBarLink from 'routes/NavLink'
import { Stack } from '@mui/system'

function NavBar() {

	
	return(<>

	<nav className={styles.navbar}>
		<Stack justifyContent={'space-between'} direction={'row'} flexWrap={'wrap'}>
				<NavBarLink to="/" text="Home" />
				<NavBarLink to="/about" text="About" />
				<NavBarLink to="/login" text="Login" />
				<NavBarLink to="/study" text="Study" />
				<NavBarLink to="/api" text="Api" />
				<NavBarLink to="/show" text="Show" />
				<NavBarLink to="/miu" text="Material Ui" />
				<NavBarLink to="/starwarsdata" text="StarWarsData" />
				
		</Stack>


	</nav>

	</>)
}
export default NavBar
