import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../presentation/types/todo'

const todoModule = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodoAction(state: Todo[], action: PayloadAction<Todo>) {
      const todo: Todo = {
        content: action.payload.content,
        status: action.payload.status,
      }
      state.push(todo)
    },
    deleteTodoAction(state: Todo[], action: PayloadAction<number>) {
      const index = action.payload
      state.splice(index, 1)
    },
    changeStatusAction(state: Todo[], action: PayloadAction<number>) {
      const index = action.payload
      state[index].status === '作業中'
        ? (state[index].status = '完了')
        : (state[index].status = '作業中')
    },
  },
})

export const {
  addTodoAction,
  deleteTodoAction,
  changeStatusAction,
} = todoModule.actions

export default todoModule
