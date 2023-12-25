"use client";
import { RootState } from "@/app/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementAsync,
  decrementByAmount,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../app/redux/reducers";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const isLoading = useSelector((state: RootState) => state.counter.isLoading);
  console.log(isLoading);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("0");
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <div className="max-w-96 flex justify-between items-center gap-4 text-white">
        <button
          className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="w-32 h-16 flex justify-center items-center border border-purple-200 rounded-lg text-orange-200 text-3xl">
          {count}
        </span>
        <button
          className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <input
        className="w-52 text-xl text-center p-1 rounded-lg text-black"
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        pattern="^[0-9]*$"
      />
      <div className="flex justify-center items-center text-white gap-3 text-xs w-[500px]">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center gap-3">
            <button
              className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2 w-full"
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount)) || 0)
              }
            >
              Add number
            </button>
            <button
              disabled={isLoading}
              className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2 disabled:bg-purple-300 w-full"
              onClick={() =>
                dispatch(incrementAsync(Number(incrementAmount) || 0))
              }
            >
              Add async
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2 w-full"
              onClick={() =>
                dispatch(decrementByAmount(Number(incrementAmount)) || 0)
              }
            >
              Remove number
            </button>
            <button
              disabled={isLoading}
              className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2 disabled:bg-purple-300 w-full"
              onClick={() =>
                dispatch(decrementAsync(Number(incrementAmount) || 0))
              }
            >
              Remove async
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
