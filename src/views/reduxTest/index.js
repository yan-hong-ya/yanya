import React from 'react'

import {connect} from 'react-redux'
import {addCountAction,reduceCountAction} from '../../store/creatorAction'



const mapStateToProps=state=>{
  return state
}

const mapDispatchToProps =dispatch =>{
  return{
    addCount(){
      dispatch(addCountAction(5))
    },
    reduceCount(){
      dispatch(reduceCountAction(2))
    }
  }
}
 class ReduxTest extends React.Component{
  constructor(){
    super()
  }

  onClick=e=>{
    console.log(e)
  }
  render(){
    return(
      <div>
       
        <button onClick={this.props.reduceCount}>-</button>
        <button onClick={this.props.addCount}>+</button>
        <p>
          得到的数据 {this.props.count}
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)

