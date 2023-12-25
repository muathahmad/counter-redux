import {
  Dispatch,
  PayloadAction,
  UnknownAction,
  createSlice,
} from "@reduxjs/toolkit";

interface ICounterState {
  value: number;
  isLoading: boolean;
}

const initialState: ICounterState = { value: 0, isLoading: false };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    counterAsyncStart: (state) => {
      state.isLoading = true;
    },
    counterAsyncSuccess: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  counterAsyncStart,
  counterAsyncSuccess,
} = counterSlice.actions;

export const incrementAsync =
  (amount: number) => (dispatch: Dispatch<UnknownAction>) => {
    dispatch(counterAsyncStart());
    setTimeout(() => {
      dispatch(counterAsyncSuccess());
      dispatch(incrementByAmount(amount));
    }, 1000);
  };

export const decrementAsync =
  (amount: number) => (dispatch: Dispatch<UnknownAction>) => {
    dispatch(counterAsyncStart());
    setTimeout(() => {
      dispatch(counterAsyncSuccess());
      dispatch(decrementByAmount(amount));
    }, 1000);
  };

export default counterSlice.reducer;
