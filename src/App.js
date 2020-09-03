import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Test from '../src/views/test/index'
// import Reduxtest from '../src/views/reduxTest/index'
// import Charts from '../src/views/test/echarts'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Test></Test>
      {/* <Reduxtest></Reduxtest> */}
      {/* <Charts></Charts> */}
      <Route component={Test}
          path="/test"
      >test</Route>
      oooo
    </div>
    </Router>
  );
}

export default App;
