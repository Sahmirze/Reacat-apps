import style from './index.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const url='https://www.swapi.tech/api/people/1'
function PointOut(){
 
const [data,setData]=useState({})
useEffect(()=>{
axios.get(url).then(({data})=>{
	setData(data.result.properties)
	console.log(data.result.properties)
})
},[])
// console.log(data)
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
		<main>
			<table border={1} className={style.table}>
			<tbody>

			
					<tr>
						<td>Name</td>
						<td>Gender</td>
						<td>Birth_year</td>
						<td>Height</td>
						<td>Eye Color</td>
						<td>Mass</td>
						<td>Skin Color</td>
						<td>HomeWorld</td>
					</tr>
					<tr>
						<th>{data.name}</th>
						<th>{data.gender}</th>
						<th>{data.birth_year}</th>
						<th>{data.height}</th>
						<th>{data.eye_color}</th>
						<th>{data.mass}</th>
						<th>{data.skin_color}</th>
						<th><a href={data.homeworld} target="_blank">{data.homeworld}</a></th>
					</tr>
					
					</tbody>
			</table>
		</main>
		</>
	)

}
export default PointOut