
import React from 'react';
import './App.css';
import Homepage from "./Page/homepage.component";

import {Route} from "react-router-dom";

function App() {
  return(
   <div>
   <Route exact path="/" component={Homepage}></Route>
   <Route path="/hats" component={Hatspage}></Route>
   
   </div>
  )
 }

const Hatspage= () => (
  <div>
<h1 style={{color:"red"}} >Homepage 
</h1>

</div>
);



export default App;

