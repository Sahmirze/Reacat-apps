import { NavLink } from 'react-router-dom'
import styles from 'pages/index.module.css'

function NavBarLink({to,text}){
	return(
		<>
			<NavLink to={to} className={({isActive})=>{
				if(isActive){
						return styles.Active
				}
				else{
					return styles.deActive
				}
				}}>{text}</NavLink>
		</>
	)
}
export default NavBarLink