import { createContext } from "react"

export const DataContext=createContext()
const data={
	ad:"Sako",
	age:20
}
export const DataContextComponent=({children})=>{
	return(
		<>
		<DataContext.Provider value={data}>
		{children}
		</DataContext.Provider>
		</>
	)
}