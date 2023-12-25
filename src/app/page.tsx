"use client";
import { decrement, increment, selectCount } from "@/component/counterSlice";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { useState } from "react";
import Counter from "@/component/Counter";

export default function Home() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("0");

  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center gap-16 p-24">
        <h1 className="text-3xl text-purple-300 uppercase font-bold">
          Redux counter
        </h1>
        <Counter />
      </main>
    </Provider>
  );
}
