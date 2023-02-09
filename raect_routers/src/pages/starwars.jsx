import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PageContainer from "routes/PageContainer"
import axios from 'axios'
 function StarWarsPeople(){
	const [data,setData]=useState({})
		const {peopleId}=useParams()
		useEffect(()=>{
				axios.get(`https://www.swapi.tech/api/people/${peopleId}`).then(({data})=>{
					console.log(data.result.properties)
				
						
					let {birth_year,created,edited,eye_color,gender,hair_color,heigh,mass,name,skin_color}=data.result.properties
					setData({
						birth_year,
						created,
						edited,
						eye_color,
						gender,
						hair_color,
						heigh,
						mass,
						name,
						skin_color,

					})
				}).catch((err)=>{
				console.log(err)
				})
		},[])
		

	return(
		<PageContainer>
			<div style={{textAlign:"center"}}>
				<h3>Name: {data.name}</h3>
				<h4>Created: {data.created}</h4>
				<h4>Edited:  {data.edited}</h4>
				<h4>Eye color: {data.eye_color}</h4>
				<h4>Gender:{data.gender}</h4>
				<h4>Hair Color: {data.hair_color}</h4>
				<h4>Height: {data.heigh}</h4>
			
				<h4>Mass: {data.mass}</h4>
				<h4>Skin Color: {data.skin_color}</h4>
			</div>
		
		</PageContainer>

	)
 }

 export default StarWarsPeople