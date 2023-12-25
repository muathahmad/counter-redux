"use client";
import Counter from "@/component/Counter";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
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
