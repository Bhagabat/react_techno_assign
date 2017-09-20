import axios from 'axios';
export const selectUser = (user) =>{
	console.log('user selected',user.first);
	return {
		type:'USER_SELECTION',
		payload:user
	}
}

export const selectUserAC =(user) =>{
console.log('selected user::::',user.first);
	return (dispatch,getState) =>{
		axios.get('https://randomuser.me/api/').then((response) =>{
			console.log(response.data.results);
			dispatch(selectUser(response.data.results));
		});
	}
}

export const onSelectAddr = (address) =>{
	return {
		type: 'ADDR_SELECTION',
		payload:address
	}
}

export const _getAddressList =(payload)=>{
	return {
		type:'GET_ADDRESS_LIST',
		payload:payload
	}
}
export const getAddressList = ()=>{
	return (dispatch,getState) =>{
		axios.post('http://localhost:8086/SpringRestExample/getddr',{}).then((response) =>{
			
			dispatch(_getAddressList(response.data));
		});
	}
}
