import { NavLink } from 'react-router-dom'
import styles from 'pages/index.module.css'
function NavBar() {
	return(<>
	<nav className={styles.navbar}>
				<NavLink to="/" className={({isActive})=>{
				if(isActive){
						return styles.Active
				}
				else{
					return styles.deActive
				}
				}}>Home</NavLink>
				<NavLink to="/about" className={({isActive})=>{
				if(isActive){
						return styles.Active
				}
				else{
					return styles.deActive
				}							
				}}>About</NavLink>
				<NavLink to="/login" className={({isActive})=>{
				if(isActive){
						return styles.Active
				}
				else{
					return styles.deActive
				}
				}}>Login</NavLink>
				<NavLink to="/study" className={({isActive})=>{
				if(isActive){
						return styles.Active
				}
				else{
					return styles.deActive
				}
				}}>Study</NavLink>
			</nav>
	</>)
}
export default NavBar
