import { Grid, Paper, Typography,Box, CardMedia } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import brooklyn from '../../assist/brooklyn.jpg';
import styles from './index.module.css';
import Rating from '@mui/material/Rating';
export const Build=({text,img,})=>{
	return(
		<>
		<Grid item xs={3}>
			<Paper elevation={3} sx={{
				my:2
			}}>
			 <CardMedia
				component="img"
				height="194"
				image={brooklyn}
				alt="Brooklyn"
			/>
			{/* <img  src={brooklyn} alt={brooklyn} className={styles.img} /> */}
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
			
		</Grid>
		</>
	)
}