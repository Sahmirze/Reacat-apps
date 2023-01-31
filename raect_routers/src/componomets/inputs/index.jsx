import styles from './index.module.css'
import Show from 'componomets/props'
import { useState } from 'react'
function States(){
	const[input,setInput]=useState({
		name:"",
		surname:""
	})
	return(
	
		<>
			<div className={`${styles.form}`}>
				<div>
					<input value={input.name} type="text"  onChange={({target})=>{
			
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
				}} />
				</div>
				<div>
					<Show clickleyende={()=>{
						console.log(UpperAndSize(input.name,input.surname)[0])
						 setInput({...input,name:UpperAndSize(input.name,input.surname)[0],surname:UpperAndSize(input.name,input.surname)[1]})
					}} />
				</div>
			</div>

		</>
	)
}

function UpperAndSize(name,surname){
	if(name=="" || surname==""){
		name='Siz Niye Adinizi Bos Saxlayirsin 😡'
	     surname='Siz Niye Soyadiniz Bos Saxlayirsin 😡'
	}
	return [name.toUpperCase(),surname[0].toUpperCase()+surname.slice(1,surname.length)]
}

export default States