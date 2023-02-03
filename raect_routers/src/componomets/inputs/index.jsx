import styles from './index.module.css'
import Show from 'componomets/props'
import {  useState } from 'react'

	

function States({size}){
	const [input,setInput]=useState({
		name:"",
		surname:""
	})

	

	return(
	
		<>
			<div className={`${styles.form}`}>
				<div>
					<input style={{padding:`${size}px !important`}}  className={`togglewidth`} value={input.name} type="text"  onChange={({target})=>{
			
						setInput({...input,name:target.value})
					}}/>	
				</div>
				<div>
					<input value={input.surname} type="text"   onChange={({target})=>{
						setInput({...input,surname:target.value})
					}}/>
				</div>
				<div>
				<Show clickleyende={()=>{
					console.log(input)
				}} text="Ok" />
				</div>
				<div>
					<Show clickleyende={()=>{

						console.log(UpperAndSize(input.name,input.surname))
						 setInput({name:UpperAndSize(input.name,input.surname)[0],surname:UpperAndSize(input.name,input.surname)[1]})
					}} text="all UppperCase" />
				</div>
			</div>
		</>
	)


	
}
	function UpperAndSize(name,surname){
	< States size={"40px"} />
		if(name==="" || surname===""){
			name='Siz Niye Adinizi Bos Saxlayirsin 😡'
			surname='Siz Niye Soyadiniz Bos Saxlayirsin 😡'
			
		}
		
		return [name.toUpperCase(),surname[0].toUpperCase()+surname.slice(1,surname.length)]
	}

export default States