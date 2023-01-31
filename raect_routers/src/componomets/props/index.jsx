import styles from "./index.module.css"
import States from "componomets/inputs"
function Show(props){
	return(
		<>
		<div className={`${styles.turk}`} style={
			{
				color:props.color,
				textAlign:props.textAlign
			}
		}>
			{props.text}

		</div>
		<button onClick={props.clickleyende} >ok</button>
		</>
	)
}
export default Show