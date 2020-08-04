import { createStore } from 'redux'
import reducer from './reducer'

let store=createStore(reducer)

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);

export default store

