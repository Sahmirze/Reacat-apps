import { useState } from "react"
import { createContext } from "react"

export const BuildContext=createContext()

export const ModeContext=({children})=>{
	const [dark,setDark]=useState(false)
	return(
		<BuildContext.Provider value={[dark,setDark]}>
			{children}
		</BuildContext.Provider>
	)
}