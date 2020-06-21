import React from 'react'
import { Todo } from '../../../types/todo'
import Button from '../../atoms/Button/Button'

type TProps = {
  todos: Todo[]
  deleteTodo: (index: number) => void
  changeStatus: (index: number) => void
}

const Table: React.FC<TProps> = ({ todos, deleteTodo, changeStatus }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Coment</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.content}</td>
              <td>
                <Button
                  text={todo.status}
                  onClick={() => changeStatus(index)}
                />
              </td>
              <td>
                <Button text="削除" onClick={() => deleteTodo(index)} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
