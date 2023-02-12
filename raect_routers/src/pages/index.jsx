import Requsets from "componomets/24fullrequestapi";

import {FirstComponoment,SecondComponoment} from "componomets/inputs";
import { About }from "./about";
import Home from "./home";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import { Study } from "learn";
import {StarWars2, Api} from "./starwars2";
import StarWarsPeople from "./starwars";
import StarWarsData from "./starwarsdata";
import MaterialUI from "./materialui";
import { ShowUser } from "./ShowUsers";

function WebSiteRouting(){
	return(
		<>
		 <Routes>
     	 	<Route path="/states"  element={  <SecondComponoment/>}/>
			<Route path="/about" element={<About />} />
			<Route path="/show/" element={<ShowUser />} />
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/login" element={<SecondComponoment />} />
			<Route path="/study" element={<Study />} />
			<Route path="/starwars/:peopleId" element={<StarWarsPeople />} />
			<Route path="/starwarsdata" element={<StarWarsData />} />
			<Route path="/api/" element={<Api />} />
			<Route path="/miu" element={<MaterialUI/>} />
  	 	 </Routes>
  
		</>
	)
 }

 export default WebSiteRouting