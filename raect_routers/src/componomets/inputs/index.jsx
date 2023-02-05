import { useState } from "react"
import styles from "./index.module.css"
export const FirstComponoment=(props)=>{
	return(
		<>
		<div className={styles.form}>
			<input value={props.name} type="text" name="ad" onChange={props.targetNameChange}  />
			<div>{props.value}</div>
			{/* <input type="text" name="surname"  /> */}
			<button onClick={()=>{
				console.log(props.value)
			}}>ok</button>
		</div>
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
	return(
		<>
		<FirstComponoment value={value} targetChange={targetNameChange} name={value.name} />
		</>
	)
}
