
import { FirstComponoment, SecondComponoment } from "componomets/inputs"
import { DataContext} from "context/DataContext"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import PageContainer from "routes/PageContainer"
import { Container, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableContainer, TableHead,TableBody, TableRow, Typography, TableCell } from "@mui/material"
import { Box } from "@mui/system"


export const  About=()=>{
	const value=useContext(DataContext)
	const [choose,setChoose]=useState(0)
	return(
	<PageContainer >

		<Container sx={{
			marginTop:10
		}}>
				<Box sx={{
				textAlign:"center"
			}}>
			<p>Haqqimizda</p>
			<p>Id:{value[choose].id}</p>	
			<p>Name: {value[choose].name}</p>	
			<p>UserName: {value[choose].username}</p>	
			<p> Email: {value[choose].email}</p>		
			</Box>
		
		<FormControl   sx={{
		minWidth:100
	 }}>
		
  <InputLabel id="demo-simple-select-label">Choose</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={choose}
    label="Choose"
    onChange={({target})=>{
	setChoose(target.value)
    }}
   
  >
	
    <MenuItem value={0}>1</MenuItem>
    <MenuItem value={1}>2</MenuItem>
    <MenuItem value={2}>3</MenuItem>
    <MenuItem value={3}>4</MenuItem>
    <MenuItem value={4}>5</MenuItem>
    <MenuItem value={5}>6</MenuItem>
    <MenuItem value={6}>7</MenuItem>
    <MenuItem value={7}>8</MenuItem>
    <MenuItem value={8}>9</MenuItem>
    <MenuItem value={9}>10</MenuItem>
  </Select>
</FormControl>
		</Container>
		
		
	</PageContainer>
	)
 }




