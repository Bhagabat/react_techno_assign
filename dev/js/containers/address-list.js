import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onSelectAddr,getAddressList} from '../actions';
class AddressList extends Component{
	componentDidMount(){
		this.props.loadAddressList();
	}
	renderList(){
		var trs = this.props.addressList.map((d)=>{
			return(
					<tr key={d.id}>
						<td>{d.name}</td>
						<td>{d.street}</td>
						<td>{d.dist}</td>
						<td>{d.zipcode}</td>
						<td>{d.state}</td>
						<td>{d.country}</td>
					</tr>
					)
		});
		return(
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Street</th>
							<th>Dist</th>
							<th>Zip</th>
							<th>State</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>{trs}</tbody>
				</table>
				);
	}
	render(){
		return (<div>{this.renderList()}</div>)
	}
}
function mapStateToProps(state){
	return {
		addressList:state.addressList,
		selected:state.selected
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({onSelect:onSelectAddr,loadAddressList:getAddressList},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(AddressList);