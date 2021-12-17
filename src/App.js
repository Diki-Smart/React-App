import React, {Component} from 'react';
import './App.css';
import Myscars from './components/Mycars.js' 
import Tab from './components/Tab.js'





class App extends Component { 
render (){
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}

     <Myscars> </Myscars>
    </div>

    
  );
}

}
export default App;



