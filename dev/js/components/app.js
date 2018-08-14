import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ResultBoard from '../containers/ResultBoard';
import Admission from '../containers/Admission';
require('../../less/style.less');
const App = () =>(
   <div>
	<ResultBoard/>
   </div>
);

const App1 = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Mark Details</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
         
        </ul>
  
        <hr />
  
        <Route exact path="/" component={ResultBoard} />
        <Route path="/admission" component={Admission} />
      </div>
    </Router>
  );

  
  
export default App1;