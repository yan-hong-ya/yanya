import React from 'react'
import Test from '../views/test/index'
import Reduxtest from '../views/reduxTest/index'
import Charts from '../views/echarts/echarts'
import Pdf from '../views/pdf/index'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// function Routers() {

class Routers extends React.Component {

    constructor() {
        super()
        this.state = {
            current: 'aa'
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;

        return (

            <Router>
                <div className="App">
                    {/* <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="aa" icon={<MailOutlined />}>
                            <Link to="/">test</Link>
                        </Menu.Item>
                        <Menu.Item key="bb" icon={<AppstoreOutlined />}>
                            <Link to="/reduxtest">reduxtest</Link>
                        </Menu.Item>
                        <Menu.Item key="cc" icon={<AppstoreOutlined />}>
                            <Link to="/charts">charts</Link>
                        </Menu.Item>

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

                    </Menu> */}
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
                        <li>
                            <Link to="/pdf">pdf</Link>
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
                        <Route path="/pdf">
                            <Pdf />
                        </Route>
                    </Switch>


                </div>
            </Router>
        )
    }

}

export default Routers