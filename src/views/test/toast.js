import React, { Component } from 'react'
import { Input} from 'antd';
import Drag from './drag'


class Toast extends React.Component {
    constructor() {
        super()
        this.state = {
            jobNumber2: ''
        }
    }


    componentDidMount=() => {
        Drag.init('ant-modal-content').DragStart()
        console.log(this.props.jobNumber)
        this.setState({
            jobNumber2: this.props.jobNumber
        })
        this.jobNumber2 = this.props.jobNumber
    }

    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps.jobNumber)
        // this.setState({
        //     jobNumber2: nextProps.jobNumber
        // })
        this.jobNumber2 = nextProps.jobNumber
    }
    jobNumber2

    handleNumber2 = (e) => {
        console.log(e.target.value)
        this.setState({
            jobNumber2: e.target.value
        })
    }


    render() {
        return (
            <div>
                <Input defaultValue={this.jobNumber2}
                    key={this.jobNumber2}
                    onChange={this.handleNumber2}
                    placeholder="请输入"
                    style={{ width: '150px' }}
                />
            </div>
        )
    }
}

export default Toast