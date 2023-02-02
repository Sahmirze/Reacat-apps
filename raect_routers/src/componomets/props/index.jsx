import styles from "./index.module.css"

function Show(props){
	return(
		<>
		{/* <div className={`${styles.turk}`} style={
			{
				color:props.color,
				textAlign:props.textAlign
			}
		}>
			{props.text}

		</div> */}
		<button onClick={props.clickleyende} >{props.text}</button>
		</>
	)
}
export default Show