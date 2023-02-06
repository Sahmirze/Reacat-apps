import Requsets from "componomets/24fullrequestapi";
import Show from "componomets/props";
import {FirstComponoment,SecondComponoment} from "componomets/inputs";
import About from "./about";
import Home from "./home";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
function WebSiteRouting(){
	return(
		<>
		 <Routes>
     	 	<Route path="/states"  element={  <SecondComponoment/>}/>
			<Route path="/about" element={<About />} />
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/login" element={<SecondComponoment />} />
  	 	 </Routes>
  
		</>
	)
 }

 export default WebSiteRouting