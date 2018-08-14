export default function(state=[],action){
	console.log('action.....',action);
	switch(action.type){
		case 'GET_MARK_LIST':
			return action.payload;
			break;
		}
	return state;
}