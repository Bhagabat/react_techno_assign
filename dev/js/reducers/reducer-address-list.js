export default function(state=[],action){
	console.log('action.....',action);
	switch(action.type){
		case 'GET_ADDRESS_LIST':
			return action.payload;
			break;
		}
	return state;
}