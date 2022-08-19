import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByTwo: (state, { payload }) => {
      state.counter += payload
    },
  },
})

export const { increment, decrement, incrementByTwo } = counterSlice.actions;
