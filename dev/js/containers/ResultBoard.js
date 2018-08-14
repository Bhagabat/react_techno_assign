import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMarkList} from '../actions';
class ResultBoard extends Component{
	componentDidMount(){
		this.props.getMarkList();
	}
	renderList(){
		var trs = this.props.markList.map((d)=>{
			return(
					<tr key={d.id}>
						<td className={d.status ==='Fail'?'std-name fail':d.status ==='Topper'?' std-name topper':'std-name'}>{d.name}</td>
						<td>{d.rollNumber}</td>
						<td>{d.marks.Maths}</td>
                        <td>{d.marks.English}</td>
                        <td>{d.marks.Science}</td>
                        <td>{d.total}</td>
						<td>{d.status}</td>
						
					</tr>
					)
		});
		return(
				<table className='addrList'>
					<thead>
						<tr>
							<th rowSpan='2' className='header'>Name</th>
							<th rowSpan='2' className='header'>Roll No</th>
							<th colSpan='4' className='header'>Marks</th>
							<th rowSpan='2' className='header'>Status</th>
							
						</tr>
                        <tr>
                            <th className='sub-header'>Math</th>
                            <th className='sub-header'>English</th>
                            <th className='sub-header'>Science</th>
                            <th className='sub-header'>Total</th>
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
		markList:state.markList
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({getMarkList:getMarkList},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ResultBoard);