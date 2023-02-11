import { Button, Grid, Paper, Typography } from "@mui/material"
import { Container } from "@mui/system"
import PageContainer from "routes/PageContainer"
import { Build } from "./setup/set"

function MaterialUI(){

	return(
	<PageContainer>
	<Container >
		<Grid container spacing={3} sx={{
			my:1
		}}>
		<Build />
		<Build />
		<Build />
		<Build />
		</Grid>
	
	</Container>
	</PageContainer> 
	)
 }

 export default MaterialUI
