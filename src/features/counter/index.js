import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  statusLoading,
  selectValue,
} from "./counterSlice";
// import {useSelector, useDispatch} from 'react-redux';

export const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const dispatch = useDispatch();
  const value = useSelector(selectValue);
  const isLoading = useSelector(statusLoading);
  const incrementValue = Number(incrementAmount);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-4 text-[#bada55]">
        {isLoading ? "Loading..." : value}
      </h2>
      <div className="flex items-center justify-evenly mb-2">
        <button
          className="bg-white shadow-lg rounded-sm p-2 px-4 text-4xl hover:shadow-2xl duration-200 transition hover:scale-110"
          onClick={() => dispatch(increment())}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="ml-4 bg-white shadow-lg rounded-sm p-2 px-5 text-4xl hover:shadow-2xl duration-200 transition hover:scale-110"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          -{" "}
        </button>
      </div>
      <div className="mt-8">
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          aria-label="set increment amount"
          className="p-2 bg-white border-sm shadow-lg rounded outline-none mr-6"
        />
        <button
          className="bg-orange-600 text-white shadow-lg rounded-sm p-2 px-4 text-lg hover:shadow-2xl duration-200 transition hover:scale-110"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          {" "}
          Add Amount{" "}
        </button>
      </div>
      <div className=" flex items-center justify-center mt-10">
        <button
          className={`${
            isLoading ? "cursor-not-allowed" : ""
          } cursor-pointer bg-green-600 text-white shadow-lg rounded-sm p-2 px-4 text-lg hover:shadow-2xl duration-200 transition hover:scale-110`}
          onClick={() => dispatch(incrementAsync(incrementValue))}
          disabled={isLoading}
        >
          {" "}
          Add Async{" "}
        </button>
      </div>
    </div>
  );
};
