
import PageContainer from "routes/PageContainer"
import Frame from 'assets/Frame.svg'
import Shape1 from 'assets/shape-1.svg'
import Group from 'assets/Group.svg'
import { Container, Stack } from "@mui/system"
import Link from '@mui/material/Link'
import { Box,Button,Checkbox,Grid, InputAdornment, InputLabel,  Paper,TextField, Typography } from "@mui/material"
function Home(){
	return(
		<>	
			<PageContainer >
				<Container >
					<Grid container >
						<Grid   md={3} sm={3}  sx={{
							position:"relative",
							width:"100%",
							textAlign:{xs:"center"}
							}}>
						<Stack sx={{
							flexDirection:{xs:"row"},
							justifyContent:{xs:"space-between"}
						}}>
							<Box  sx={{
								position:{sm:"absolute"},
								top:{sm:0},
								right:{sm:0},
							}}>
								<img src={Shape1} alt="" />
							</Box>
							<Box  sx={{
								position:{sm:"absolute"},
								bottom:{sm:0},
								right:{sm:0}
							}}>
								<img src={Frame} alt="" />
							</Box>
						</Stack>
						</Grid>
						<Grid item  sm={7} md={6}  sx={{
							width:"100%"
						}}>
							<Container  >
								<Paper sx={{padding:"20px",maxWidth:450,margin:"0 auto"}} >
							<Typography variant="h4" align="center">
								Daxil Olun
							</Typography>
						<Box>
							<InputLabel sx={{ color: "black",
								    fontWeight: 600,padding:'10px 0'}} htmlFor="input-with-icon-adornment">
									Email
							</InputLabel>
							<TextField fullWidth
							id="outlined-adornment-amount"
							placeholder="Email ünvanı"
							InputProps={{
								startAdornment: <InputAdornment position="start"></InputAdornment>,
								}}
							
							/>
						</Box>
						<Box sx={{padding:"20px 0"}}>

						<InputLabel sx={{ color: "black",
							    fontWeight: 600,padding:'10px 0'}} htmlFor="input-with-icon-adornment">
								Şifrə
						</InputLabel>
						<TextField fullWidth
						placeholder="Şifrə"
						id="outlined-adornment-amount"
						InputProps={{
							startAdornment: <InputAdornment position="start"></InputAdornment>,
							}}
						
						/>
					</Box>
					<Stack direction={"row"} justifyContent="space-between" >
						<Box>
							<Checkbox/>
						</Box>
						<Typography sx={{
						marginTop:'12px'
					}}>
					<Link href="#" underline="none" sx={{color:"black"}}>
					Şifrənizi unutmusunuz?
					</Link>
					</Typography>
					</Stack>
					<Box sx={{textAlign:"center",margin:"15px 0"}}>
					<Button variant="contained">
					Daxil ol 
					</Button>
					</Box>
					<Stack direction={'row'} justifyContent="center" gap={2}>
					<Link href="#" underline="none">
					Hesabınız yoxdur?
					</Link><Link href="#" underline="none">
					Qeydiyyatdan keçin
					</Link>
					</Stack>
							</Paper>
							</Container>
							
						</Grid>
						<Grid item    md={3} sm={2} sx={{
							
							width:"100%",
							position:"relative",
							textAlign:"center"
						}}>
							<Box sx={{
								marginTop:{xs:10},
								position:{sm:"absolute"},
								top:{sm:"20%"},
							}}>
								<img src={Group} alt="" />
							</Box>	
						</Grid>
					</Grid>
				</Container>
			</PageContainer>
		</>

	)
 }

 export default Home
