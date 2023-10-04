
import {withRouter} from "react-router-dom"
function User(prop){
	console.log(prop);
	let c=prop.match.params.rollno

	return(
		<div>
		<h1>User components {c}</h1>
		</div>



		)
}
export default withRouter(User);