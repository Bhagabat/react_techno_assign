import {combineReducers} from 'redux';
import ActiveAddressReducer from './reducer-address-selection';
import AddressListReducer from './reducer-address-list';
const allReducers = combineReducers({
	addressList:AddressListReducer,
	selected:ActiveAddressReducer
});

export default allReducers;