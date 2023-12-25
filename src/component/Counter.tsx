"use client";
import { decrement, increment, incrementAsync, incrementByAmount, selectCount } from "./counterSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("0");
  return (
    <div className="flex flex-col items-center justify-center gap-6">
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
        <div className="flex justify-center items-center text-white gap-3 text-sm">
          <input
            className="w-20 text-xl text-center p-1 rounded-lg text-black"
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            pattern="^[0-9]*$"
          />
          <button
            className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2"
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount))||0)}
          >
            Add number
          </button>
          <button
          disabled={true}
            className="flex justify-center items-center rounded-md bg-purple-500 px-6 py-2 disabled:bg-purple-300"
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add async
          </button>
        </div>
      </div>
  );
}
