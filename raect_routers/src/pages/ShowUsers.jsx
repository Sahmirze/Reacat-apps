import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import PageContainer from "routes/PageContainer"
import axios from 'axios'
import { Box } from "@mui/system"
import { Container, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableContainer, TableHead,TableBody, TableRow, Typography, TableCell } from "@mui/material"

export const  ShowUser=()=>{
const [select,setSelect]=useState(0)

const [location,setLocation]=useState([]);

const [count,setCount]=useState([]);
	

	useEffect(()=>{
	axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
	console.log(data[select].address.city)
	console.log(data[select])
	setCount({
		name:data[select].name,
		id:data[select].id,
		phone:data[select].phone,
		username:data[select].username,
		website:data[select].website
	})
	setLocation({
		city:data[select].address.city,
		street:data[select].address.street,
		suite:data[select].address.suite,
		zip:data[select].address.zipcode
	})
	}).catch((err)=>{
	console.log(err)
	})


},[select])

	return(
	<PageContainer  >
		<Container>
	<Box   my={10} mx={5}
	>
      <FormControl  sx={{
		minWidth:100
	 }} >
        <InputLabel id="demo-simple-select-label" sx={{
		
	   }}>Choose</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
		value={select}
          label="Choose"
		onChange={({target})=>{
			setSelect(target.value)
			
			}}
			autoWidth
        >
	
          <MenuItem  value={0}>1</MenuItem>
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
    </Box>
    </Container>	
<Container>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
		
          <TableRow>
<TableCell>Id</TableCell>
<TableCell>Name</TableCell>
<TableCell>UserName</TableCell>
<TableCell>Phone</TableCell>
<TableCell>WebSite </TableCell>
<TableCell>city</TableCell> 
<TableCell>street</TableCell> 
<TableCell>suite</TableCell> 
<TableCell>zip</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
  <TableRow>
<TableCell>{count.id}</TableCell>
<TableCell>{count.name}</TableCell>
<TableCell>{count.username}</TableCell>
<TableCell>{count.phone}</TableCell>
<TableCell> {count.website}</TableCell>
<TableCell>{location.city}</TableCell> 
<TableCell>{location.street}</TableCell> 
<TableCell>{location.suite}</TableCell> 
<TableCell>{location.zip}</TableCell> 
  </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

</Container>
		{/* <div>ShowUser</div>
<select value={select} onChange={({target})=>{
setSelect(target.value)

}} >
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
</select> */}
	</PageContainer>
	)
 }




