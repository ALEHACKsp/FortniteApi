import React from 'react';
import "./Nav.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Playerstats from '../Pages/playerstats';
import Challanges from '../Pages/challanges'
import Store from '../Pages/store'
import {Arrow} from "./Navarrows"


// function Nav() {

//     return (
    
//     <Router>
//     <div className="nav">
//       <ul className="navbar">
//         <li>
//           <Link to="/playerstats">Player stats<Arrow/></Link>
//         </li>
//         <li>
//           <Link to="/challanges">Challanges<Arrow/></Link>
//         </li>
//         <li>
//           <Link to="/store">Store<Arrow/></Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/playerstats" component={Playerstats} />
//       <Route path="/challanges" component={Challanges} />
//       <Route path="/store" component={Store} />
//     </div>
//   </Router>
      
//     );
// }

// export default Nav;