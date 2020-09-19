import React, { Component } from 'react'
import { Input, Modal } from 'antd';
import Toast from './toast'
import API from '../../config/api'
// import Drag from './drag'
import './index.less'
// import Charts from './echarts'
import Rotate from '../../js/rotate'

class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            jobNumber: '',
            visible: false,
            visibleRotate:false
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

    handleOkRotate = e => {
        console.log(e);
        this.setState({
            visibleRotate: false
        });
    };

    handleCancelRotate = e => {
        console.log(e);
        this.setState({
            visibleRotate: false
        });
    };

    handleTrees = () => {
        API.getTrees().then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleRotate=()=>{
        this.setState({
            visibleRotate:true
        })

        setTimeout(()=>{
            Rotate.init('rotateImg').DragStart()
        },1000)



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
                {/* <Charts></Charts> */}

                <button onClick={this.handleRotate}>图片旋转</button>

                <Modal
                    closable={false}
                    destroyOnClose
                    footer={null}
                    onCancel={this.handleCancelRotate}
                    onOk={this.handleOkRotate}
                    visible={this.state.visibleRotate}
                >
                    <div id="rotateImg"
                        style={{background:'url('+require('../../img/111.jpeg')+')',width:480,backgroundSize:'cover',height:600}}
                    >

                    </div>

                </Modal>
            </div>
        )
    }
}

export default Test