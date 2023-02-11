import { Grid, Paper, Typography,Box, CardMedia, createTheme ,ThemeProvider, AppBar, Toolbar, IconButton, Button} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import brooklyn from '../../assist/brooklyn.jpg';
import Rating from '@mui/material/Rating';

const theme=createTheme({
	MuiTypegraphy:{
		variants:{
			props:{
				variant:'body2'
			},
			style:{
			fontSize:2
			}
		}
	}
})
export const Build=({text,img,})=>{


	return(
		<>
	

		<Grid item xs={3}>
	
			<ThemeProvider theme={theme}>
			<Paper elevation={3} sx={{
				my:2
			}}>
			

				
			 <CardMedia
				component="img"
				height="194"
				image={brooklyn}
				alt="Brooklyn"
			/>

			<Box padding={1}>
			<Typography variant="subtitle1" componoent="h2">
				Lorem ipsum dolor sit amet.
			</Typography>
			
			</Box>
				
			<Box  paddingX={1} sx={{
					display:'flex',
					alignItems:'center'
					
				}}>
					<AccessTimeIcon fontSize="small"></AccessTimeIcon>	
				<Typography  variant="body2" component='p'>
					5 hours
				</Typography>
			</Box>
			
			<Box paddingX={1} sx={{
					display:'flex',
					alignItems:'center'
				}}>
			 <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
			</Box>
			
			</Paper>
			</ThemeProvider>
		</Grid>
		
		</>
	)
}