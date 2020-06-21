import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../presentation/types/todo'

const todoModule = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state: Todo[], action: PayloadAction<Todo>) {
      const todo: Todo = {
        content: action.payload.content,
        status: action.payload.status,
      }
      state.push(todo)
    },
  },
})

export const { addTodo } = todoModule.actions

export default todoModule
