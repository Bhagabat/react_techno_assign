import React from 'react';
import AddressList from '../containers/address-list';
import AddressDetetails from '../containers/address-details';
require('../../scss/style.scss');
const App = () =>(
   <div>
	<AddressList/>
	<AddressDetetails/>
   </div>
);

export default App;