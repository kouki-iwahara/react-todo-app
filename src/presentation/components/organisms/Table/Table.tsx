import React from 'react'
import { Todo } from '../../../types/todo'
import Button from '../../atoms/Button/Button'

type TProps = {
  todos: Todo[]
}

const Table: React.FC<TProps> = ({ todos }) => {
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
                  onClick={() => console.log('clicked')}
                />
              </td>
              <td>削除</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
