import Requsets from "componomets/24fullrequestapi";
import Show from "componomets/props";
import States from "componomets/inputs";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   {/* <Show clickleyende={()=>{
    console.log("click me")
   }} textAlign="center"  color="red" text="Türkün isteyib ede bilmeyeceyi iki sey var. Qalan her bir seyi turkler ede biler" />
    */}
    <Routes>
      <Route path="/states"  element={ <States />}/>
    </Routes>
  
   
   </>
  );
}

export default App;
