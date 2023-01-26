import style from './index.module.css'
import axios from 'axios'
function PointOut(){

	return (
		<>
		<header>
			<nav>
				<ul className={`${style.nav}  ${style.type}`}>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Sign up</li>
				</ul>
			</nav>
		</header>
		</>
	)

}
export default PointOut