export default function(state=null,action){
	switch(action.type){
	case 'ADDR_SELECTION':
		return action.payload;
		break;
	}
	return state;
}