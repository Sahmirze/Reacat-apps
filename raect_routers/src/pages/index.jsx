import Requsets from "componomets/24fullrequestapi";
import Show from "componomets/props";
import {FirstComponoment,SecondComponoment} from "componomets/inputs";
import {About }from "./about";
import Home from "./home";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import { Study } from "learn";
import StarWars from "./starwars";
function WebSiteRouting(){
	return(
		<>
		 <Routes>
     	 	<Route path="/states"  element={  <SecondComponoment/>}/>
			<Route path="/about" element={<About />} />
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/login" element={<SecondComponoment />} />
			<Route path="/study" element={<Study />} />
			<Route path="/starwars/:peopleId" element={<StarWars />} />

  	 	 </Routes>
  
		</>
	)
 }

 export default WebSiteRouting