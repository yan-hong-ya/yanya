import {AddCount,ReduceCount} from './types'
let defaultState = {
  count: 1
}

export default (state = defaultState, action) => {
  if (action.type === AddCount) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.count += action.value
    return newState
  }

  else if (action.type === ReduceCount) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.count -= action.value
    return newState
  }
  return state
}


