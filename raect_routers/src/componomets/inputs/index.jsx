import { useState } from "react"
import PageContainer from "routes/PageContainer"
import styles from "./index.module.css"
export const FirstComponoment=(props)=>{
	const [input,setInput]=useState({
		ad:props.name,
		soyad:props.surname
	})

	return(
		<>
		<PageContainer>
		<div className={styles.form}>
			 <input value={input.ad} type="text" name="ad"  onChange={({target})=>{
					setInput({...input,ad:target.value})
			}} />
			
			<div>{props.surname}</div>
			<input value={input.soyad} type="text" name="surname" onChange={({target})=>{
				setInput({...input,soyad:target.value})	
			}}  />

			<button onClick={()=>{
				console.log(input.ad,input.soyad)
			}}>ok</button>
		</div>
		</PageContainer>
		</>
	)
}

export const SecondComponoment=()=>{
	const [value,setValue]=useState({
		name:"",
		surname:""
	})

const targetNameChange=({target})=>{
	setValue({...value,name:target.value})
}
const targetSurNameChange=({target})=>{
	setValue({...value,surname:target.value})
}
	return(
		<>
		<FirstComponoment value={value} targetSurNameChange={targetSurNameChange} targetChange={targetNameChange} name={value.name} surname={value.surname} />
		</>
	)
}
