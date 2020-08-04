import React, { Component } from 'react'
import { Input, Modal } from 'antd';
import Toast from './toast'
import API from '../../config/api'
// import Drag from './drag'
import './index.less'

class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            jobNumber: '',
            visible: false

        }
    }

    componentDidMount = () =>{
        console.log(111)
        // Drag.init("ant-modal-content").DragStart()
    }

    handleNumber = (e) => {
        console.log(e.target.value)
        this.setState({
            jobNumber: e.target.value
        })
    }

    handleChangeValue = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleTrees = () => {
        API.getTrees().then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        return (
            <div>

                <Input onChange={this.handleNumber}
                    placeholder="请输入"
                    style={{ width: '150px' }}
                    value={this.state.jobNumber}
                />

                <button className="red"
                    onClick={this.handleChangeValue}
                    type="primary"
                // style={{position:'absolute'}}
                >
                    传值
                </button>
                <Modal
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    title="Basic Modal"
                    visible={this.state.visible}
                >
                    <Toast jobNumber={this.state.jobNumber} ></Toast>
                </Modal>
                <button onClick={this.handleTrees}>看请求的数据</button>
            </div>
        )
    }
}

export default Test