import { useState } from "react"
import styles from "./index.module.css"
export const FirstComponoment=({value,targetNameChange})=>{

	return(
		<>
		<div className={styles.form}>
			<input value={value} type="text" name="name" onChange={targetNameChange}  />
			<div>{value}</div>
			{/* <input type="text" name="surname"  /> */}
			<button onClick={()=>{
				console.log(value)
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
		<FirstComponoment value={value} targetChange={targetNameChange} />
		</>
	)
}
