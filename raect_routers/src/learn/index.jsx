import { useEffect, useState } from "react"
import PageContainer from "routes/PageContainer"
import styles from "./index.module.css"
import axios from 'axios'
export const Study=()=>{

const url="https://swapi.dev/api/people/1"

		useEffect(()=>{
			axios.get(url).then(({data})=>{
console.log(data)
			}).catch((err)=>{
				console.log(err)
			})
		},[])
	const [search,setSearch]=useState("salam")
	return(
		<>
		<PageContainer>
		<div className={styles.form}>
			<input type="text" name="search" id="" />
			<button onClick={()=>{
				console.log(search)
			}}>
				Search
			</button>
		</div>
		</PageContainer>
		</>
	)
}