import { useEffect } from "react"
import { createContext } from "react"
import axios from 'axios'
import { useState } from "react"

export const DataContext=createContext()

export const DataContextComponent=({children})=>{
	return(
		<>
		<DataContext.Provider value={'salam'}>
		{children}
		</DataContext.Provider>
		</>
	)
}