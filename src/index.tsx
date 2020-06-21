import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import TodoApp from './presentation/pages/TodoApp'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
