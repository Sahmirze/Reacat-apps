import { useEffect } from "react"
import { createContext } from "react"
import axios from 'axios'
import { useState } from "react"


export const DataContext=createContext()
const data='er'



export const DataContextComponent=({children})=>{
	const [data,setData]=useState({})
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
// console.log(data)
setData(data)
}).catch((err)=>{
console.log(err)
})
},[])

		
		

	return(
		<>
		<DataContext.Provider value={data}>
		{children}
		</DataContext.Provider>
		</>
	)
}

