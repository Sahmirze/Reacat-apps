
import PageContainer from "routes/PageContainer"
import Frame from 'assist/Frame.svg'
import Shape1 from 'assist/shape-1.svg'
import Group from 'assist/Group.svg'
import { Container } from "@mui/system"
import { Box, CardMedia, Grid, Typography } from "@mui/material"
function Home(){
	return(
		<>	
			<PageContainer >
				<Container     sx={{
					minHeight:'80vh',
				}}>
					<Grid container spacing={2}>
						<Grid item  direction={"column"} sm={3}  sx={{
							backgroundColor:'red',
							}}>
							<Box sx={{
								width:'40%'
							}}>
								<CardMedia
							 component="img"
							 weigth="20"
							 height=""
							 image={Shape1}
							>
							</CardMedia>
							</Box>
							<Box  sx={{
								width:'40%',
							}}>
							<CardMedia
							 component="img"
						
							 image={Frame}
							>
							</CardMedia>
							</Box>
						</Grid>
						<Grid item  sm={6} sx={{
							backgroundColor:'blue'
						}}>
							<Typography variant="h4" align="center">
								Daxil Olun
							</Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, dolore. Ad aliquid iure rerum consectetur voluptatibus delectus culpa quod soluta maiores atque vel facere expedita omnis, ducimus, accusantium dolor, ratione beatae. Dolores excepturi ducimus magnam maiores accusamus, labore, nam atque aut eos nisi odio at reiciendis impedit. Autem rem quaerat facere minima veritatis consequatur labore placeat mollitia, nisi quibusdam animi illum rerum pariatur id ratione suscipit beatae molestias consectetur magnam sapiente veniam adipisci amet modi vero! Ea ullam in quisquam harum dolorem vitae tempore perferendis temporibus sunt dignissimos accusamus quaerat, delectus magnam iusto! Natus soluta saepe quos sapiente ex qui.
						</Grid>
						<Grid item  sm={3} sx={{
							backgroundColor:'yellow'
						}}>
							<item>
								<img src={Group} alt="" />
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laborum eius, fuga odit inventore odio commodi dolorum voluptatum similique dicta reprehenderit deserunt nobis obcaecati porro quis unde nostrum delectus eaque non itaque id? Animi assumenda sint iure perspiciatis veniam illum ea nam officiis esse sit amet repellendus id quam molestiae dolore sequi cupiditate, porro, soluta nostrum. Unde quod impedit sint distinctio, nostrum tenetur blanditiis ut incidunt voluptatum debitis voluptates natus consectetur enim repudiandae, ipsam aut rerum minus dolorem modi nisi sapiente perferendis non. Magnam ipsam recusandae ipsum perspiciatis beatae! Rem animi blanditiis ipsum nihil, voluptatibus nobis delectus autem suscipit. Laborum.
							</item>
							
						</Grid>

					</Grid>


				</Container>

			</PageContainer>
		</>

	)
 }

 export default Home
