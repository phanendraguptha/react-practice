// 📄 Read Docs
// useReducer - https://react.dev/reference/react/useReducer
// Definition - The `useReducer` hook in React is used to manage complex state logic in your components.
//              It takes a reducer function and an initial state, and returns the current state
//              and a dispatch function for updating the state.
// Rules of Hooks - https://react.dev/reference/rules/rules-of-hooks

import { useReducer } from "react";

type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };
type StateType = { count: number };

// reducer function is used to update the state
// it takes the current state and an action, and returns the new state
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

// ✅ It is always better to have a custom that exposes all the default actions
// const useCount = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   const increment = () => {
//     dispatch({ type: "increment" });
//   };

//   const decrement = () => {
//     dispatch({ type: "decrement" });
//   };

//   const reset = () => {
//     dispatch({ type: "reset" });
//   };

//   return {
//     count: state.count,
//     increment,
//     decrement,
//     reset,
//   };
// };

const UseReducer = () => {
  // useReducer takes a reducer function and an initial state, and
  // returns the current state and a dispatch function for updating the state.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full space-y-4">
      <div className="flex items-center gap-2">
        {/* dispatch function is used to update the state */}
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        {/* state is the current state */}
        {state.count}
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
