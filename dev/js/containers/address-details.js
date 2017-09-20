import React,{Component} from 'react';
import {connect} from 'react-redux';
class AddressDetails extends Component{
	render(){
		return (<div>User details screen</div>);
	}
}
function mapStateToProps(state){
	return {
		userDetail:state.userDetail
	}
}
export default connect(mapStateToProps)(AddressDetails);