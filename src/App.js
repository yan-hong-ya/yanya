import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Test from '../src/views/test/index'
import Reduxtest from '../src/views/reduxTest/index'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      {/* <Test></Test> */}
      <Reduxtest></Reduxtest>

      <Route path='/test' component={Test}></Route>
    </div>
    </Router>
  );
}

export default App;
