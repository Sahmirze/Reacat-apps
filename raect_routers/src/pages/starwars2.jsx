import axios from "axios"
import { useEffect, useState } from "react"
import PageContainer from "routes/PageContainer"
import styles from './index.module.css'
export const StarWars2=( props)=>{

	return(
		<PageContainer>
		<div className={styles.cntr}>
		<p>Country: {props.olke} </p>
		<p>State: {props.bolge }</p>
		<p>Date: {props.latitude }</p>
		<img className={styles.imgs} src={`${props.image}`} alt="" />	
		</div>

		</PageContainer>

	)

} 

export const Api=()=>{
	const [us,setUs]=useState({
		olke:'',
		bolge:'',
		latitude:''
	})
	const [image,setImage]=useState({
		image:''
	})

	useEffect(()=>{
		axios.get('https://api.zippopotam.us/us/33162')
		.then(({data})=>{
			console.log(data)
			setUs({
				olke:data.country,
				bolge:data.places[0].state,
				latitude:data.places[0].latitude,
				
			})

		})
		.catch((error)=>{
			console.log(error)
		})

		axios.get('https://dog.ceo/api/breeds/image/random').then(({data})=>{
		setImage({
			image:data.message
		})
			console.log(data.message)
	}).catch((err)=>{
		console.log(err)
	})
	},[])
	
	return(
		<>
		<StarWars2 olke={us.olke} bolge={us.bolge} 
		image={image.image}
		latitude={us.latitude} />
			
		</>
	)
}




