import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PageContainer from "routes/PageContainer"
import axios from 'axios'
 function StarWars(){
	const [data,setData]=useState("")
		const {peopleId}=useParams()
		useEffect(()=>{
				axios.get(`https://www.swapi.tech/api/people/${peopleId}`).then(({data})=>{
					setData(data.result.description)
					console.log(data.result.description)
				}).catch((err)=>{
				console.log(err)
				})
		},[])
		

	return(
		<PageContainer>
		{data}
		</PageContainer>

	)
 }

 export default StarWars