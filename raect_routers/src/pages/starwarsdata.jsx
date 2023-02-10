import { useEffect, useState } from "react"
import PageContainer from "routes/PageContainer"
import axios  from 'axios'
import { Link } from "react-router-dom"
function StarWarsData(){
const [data,setData]=useState([])
useEffect(()=>{
	axios.get('https://www.swapi.tech/api/people').then(({data})=>{
		const newData=data.results.map(({uid,name})=>({uid,name}))
		setData(newData)
		console.log(data.results)
	})
},[])

	return(
	<PageContainer >
		<div style={{
			display:"flex",
			flexWrap:"wrap",
			gap:10,
			justifyContent:"center",
			marginTop:40
		
		}}>
		{
		data.map(({uid,name,url})=>{

				return(
				// <Link style={{display:'block',
				//  width:270,height:150, boxShadow:'0 0 10px black'}}
				<Link  key={uid}
				style={{display:'block',
				 width:200,
				 height:200, 
				 boxShadow:'0 0 10px black',
				 textDecoration:'none',
				 color:'black',
				 textAlign:"center"
				}}

				to={`/starwars/${uid}`}>
				<h1 >{name}</h1>
				<p >{uid}</p>
				
				</Link>	
					
			)
	
		})
	}
	
		</div>
    
	</PageContainer>
	)
 }

 export default StarWarsData
