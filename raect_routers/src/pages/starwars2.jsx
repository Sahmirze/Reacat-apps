import axios from "axios"
import { useEffect, useState } from "react"
import PageContainer from "routes/PageContainer"

function StarWars2(){
	const [us,setUs]=useState({})
	useEffect(()=>{
		axios
		.get(`https://api.zippopotam.us/us/33162`)
		.then(({data})=>{
			console.log(data)
			setUs({country:data.country,place:data.place.state})
		})
		.catch((error)=>{
			console.log(error)
		})
	},[])
	console.log(us)
	return(
		<PageContainer>
		
		</PageContainer>

	)

}
export default  StarWars2