import styles from './index.module.css'
function States(){
	return(
		<>
			<div className={`${styles.form}`}>
				<div>
					<input type="text"  />	
				</div>
				<div>
					<input type="password"  />
				</div>
				<div>
					<button > Click me</button>	
				</div>
			</div>

		</>
	)
}
export default States