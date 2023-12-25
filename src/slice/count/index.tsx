import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
    setValue(state, action) {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, setValue } = counterSlice.actions
export const selectCount = (state: { counter: { value: any } }) =>
  state.counter.value

export default counterSlice.reducer
