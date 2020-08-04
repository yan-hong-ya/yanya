import {AddCount,ReduceCount} from './types'

export const addCountAction = (value) => {
  return {
    type: AddCount,
    value
  }
}

export const reduceCountAction = (value) => {
  return {
    type: ReduceCount,  
    value
  }
}

// export const getTodosAction = data => {
//   return async dispatch => {
//     try {
//       // 发送ajax请求
//       const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
//       const action = {
//         type: GET_TODOS,
//         data
//       }
//       dispatch(action)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }