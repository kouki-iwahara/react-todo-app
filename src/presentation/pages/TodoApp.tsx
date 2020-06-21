import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootSate } from '../../reducers/rootReducer'
import { addTodo } from '../../modules/todoModule'
import RadioButton from '../components/atoms/Radio/RadioButton'
import InputText from '../components/atoms/InputText/InputText'
import Button from '../components/atoms/Button/Button'
import Table from '../components/organisms/Table/Table'

const TodoApp: React.FC = () => {
  const todos = useSelector((state: RootSate) => state.todos)
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const handleChange = (todoContent: string) => {
    setContent(todoContent)
  }
  const addTodoContent = () => {
    dispatch(addTodo({ content, status: '作業中' }))
    setContent('')
  }
  return (
    <div>
      <div>Todo App</div>
      <div>
        <RadioButton
          name="status"
          value="全て"
          id="all"
          onChange={(event) => console.log(event)}
        />
        <RadioButton
          name="status"
          value="作業中"
          id="work"
          onChange={(event) => console.log(event)}
        />
        <RadioButton
          name="status"
          value="完了"
          id="complete"
          onChange={(event) => console.log(event)}
        />
      </div>
      <div>
        <InputText
          value={content}
          onChange={(event) => handleChange(event.target.value)}
        />
        <Button text="追加" onClick={() => addTodoContent()} />
      </div>
      <div>
        <Table todos={todos} />
      </div>
    </div>
  )
}
export default TodoApp
