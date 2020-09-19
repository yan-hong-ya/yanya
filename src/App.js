import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Test from '../src/views/test/index'
import Reduxtest from '../src/views/reduxTest/index'
import Charts from './views/echarts/echarts'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/">test</Link>
        </li>
        <li>
          <Link to="/reduxtest">reduxtest</Link>
        </li>
        <li>
          <Link to="/charts">charts</Link>
        </li>
      </ul>
      <hr />

      <Switch>
          <Route exact
              path="/"
          >
            <Test />
          </Route>
          <Route path="/reduxtest">
            <Reduxtest />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
