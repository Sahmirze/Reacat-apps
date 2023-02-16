
import PageContainer from "routes/PageContainer"
import Frame from 'assist/Frame.svg'
import Shape1 from 'assist/shape-1.svg'
import Group from 'assist/Group.svg'
import { Container } from "@mui/system"
import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material"
function Home(){
	return(
		<>	
			<PageContainer >
				<Container     sx={{
					minHeight:'80vh',
				}}>
					<Grid container >
						<Grid   sm={3}  sx={{
							backgroundColor:'red',
							width:"100%"
							}}>
						
							<Grid item>
								<img src={Shape1} alt="" />
							</Grid >
							<Grid item>
								<img src={Frame} alt="" />
							</Grid >
						
						
						</Grid>
						<Grid item  sm={6} sx={{
							backgroundColor:'blue',
							width:"100%"

						}}>
							<Typography variant="h4" align="center">
								Daxil Olun
							</Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, dolore. Ad aliquid iure rerum consectetur voluptatibus delectus culpa quod soluta maiores atque vel facere expedita omnis, ducimus, accusantium dolor, ratione beatae. Dolores excepturi ducimus magnam maiores accusamus, labore, nam atque aut eos nisi odio at reiciendis impedit. Autem rem quaerat facere minima veritatis consequatur labore placeat mollitia, nisi quibusdam animi illum rerum pariatur id ratione suscipit beatae molestias consectetur magnam sapiente veniam adipisci amet modi vero! Ea ullam in quisquam harum dolorem vitae tempore perferendis temporibus sunt dignissimos accusamus quaerat, delectus magnam iusto! Natus soluta saepe quos sapiente ex qui.
						</Grid>
						<Grid item  sm={3} sx={{
							backgroundColor:'yellow',
							width:"100%"
						}}>
							<item>
								<img src={Group} alt="" />
							</item>
							
						</Grid>

					</Grid>


				</Container>

			</PageContainer>
		</>

	)
 }

 export default Home
