import { useState } from "react"
import styles from "./index.module.css"
export const FirstComponoment=(props)=>{
	const [deyer,setDeyer]=useState({
		ad:props.name,
		soyad:props.surname
	})

	return(
		<>

		<div className={styles.form}>
			<input value={deyer.ad} type="text" name="ad"  onChange={({target})=>{
					setDeyer({...deyer,ad:target.value})
			}} />
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


	return(
		<>
		<FirstComponoment value={value}  name={value.name} surname={value.surname} />
		</>
	)
}
