import React, { Component } from 'react'
import echarts from 'echarts'
import API from '../../config/api'
import 'echarts/lib/echarts'



class EchartsTest extends React.Component {
    constructor() {
        super()
        this.state = {
            legendData: [],
            xAxisData: []
        }
    }





    componentDidMount = () => {

        API.getEcharts().then(res => {
            this.setState({
                legendData: res.data.legend,
                xAxisData: res.data.xAxisData,
                seriesData: res.data.seriesData
            })
            // console.log(res.data.seriesData)
            // seriesData=res.data.seriesData
        }).catch(err => {
            console.log(err)
        })

        setTimeout(() => {
            this.getEcharts()
        }, 1000)
    }


    getEcharts = () => {

        let seriesData = []
        let seriesDataSum = []

        seriesData = [
            {
                name: '珍珠奶茶',
                type: 'bar',
                data: [3, 0, 4, 9, 1],
                stack: '数量',
                itemStyle: {
                    nomal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                }
            },
            {
                name: '红豆奶茶',
                type: 'bar',
                data: [3, 6, 4, 2, 1],
                stack: '数量',
                itemStyle: {
                    nomal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                }
            },
            {
                name: '布丁奶茶',
                type: 'bar',
                data: [0, 6, 4, 5, 1],
                stack: '数量',
                itemStyle: {
                    nomal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                }
            },
            {
                name: '椰果奶茶',
                type: 'bar',
                data: [3, 0, 4, 9, 1],
                stack: '数量',
                itemStyle: {
                    nomal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                }
            }
        ]

        //求和
        function getSeriesDataSum() {
            for (let i = 0; i < seriesData.length; i++) {
                let dataObj = seriesData[i].data

                for (let j = 0; j < dataObj.length; j++) {
                    if (i == 0) {
                        seriesDataSum[j] = dataObj[j]
                    } else {
                        seriesDataSum[j] += dataObj[j]
                    }
                }
            }

            let sunItemStyle = {
                nomal: {
                    color: 'pink',
                    label: {
                        show: false,
                        position: 'left',
                        textStyle: {
                            color: '#000'
                        }
                    }
                }
            }

            let obj = new Object()

            obj.name = '总量'
            obj.type = 'bar'
            obj.stack = 'seriesDataSum'
            obj.barGap = '-100%'
            obj.data = seriesDataSum

            seriesData.unshift(obj)

        }

        getSeriesDataSum()

        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '周销量'
                // subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['珍珠奶茶', '红豆奶茶', '布丁奶茶', '椰果奶茶']
                // data: this.state.legendData
            },
            toolbox: {
                show: false,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['七七店', '憨憨店', 'dd店', 'mm店', '阳台店']
                    // data: this.state.xAxisData
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: seriesData
        };


        // 点击图标变灰事件
        // Object.getOwnPropertyNames() 返回一个数组，该数组对元素是 obj自身拥有的枚举或不可枚举属性名称字符串。
        // 数组中枚举属性的顺序与通过 for...in 循环（或 Object.keys）迭代该对象属性时一致。数组中不可枚举属性的顺序未定义。
        let series = option['series']
        myChart.on('legendselectchanged', function (obj) {
            let selected = obj.selected
            let d = []
            Object.getOwnPropertyNames(selected).forEach(function (key) {
                if (selected[key] === true) {
                    for (let i = 0; i < series.length; i++) {
                        let changeName = series[i]['name']
                        if (changeName === key) {
                            d.push(i)
                        }
                    }
                }
            })

            let data = []
            seriesDataSum = []

            for (let i = 0; i < d.length; i++) {
                for (let j = 0; j < series.length; j++) {
                    if (d[i] === j) {
                        data.push(series[j])
                    }
                }
            }

            seriesData=data
            getSeriesDataSum()
            option['series']=seriesData

            myChart.setOption(option,true);
        })



        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }



    render() {
        return (
            <div className="main"
                id="main"
                style={{ width: 600, height: 400 }}
            ></div>
        )
    }
}

export default EchartsTest