import styles from "./index.module.css"

function Show({clickleyende,text}){
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
		<button onClick={clickleyende} >{text}</button>
		</>
	)
}
export default Show