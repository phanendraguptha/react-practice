import { useReducer } from "react";

// State
type State = {
  on: boolean;
};

// Action type
type Action = { type: "toggle" } | { type: "reset" };

// reducer function is used to update the state
// it takes the current state and an action, and returns the new state
const toggleReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    case "reset":
      return { on: false };
    default:
      return state;
  }
};

const useToggle = (reducer = toggleReducer) => {
  // useReducer takes a reducer function and an initial state, and
  // returns the current state and a dispatch function for updating the state.
  const [state, dispatch] = useReducer(reducer, { on: false });

  const toggle = () => dispatch({ type: "toggle" });
  const reset = () => dispatch({ type: "reset" });

  // exposing state and dispatcher functions
  return {
    on: state.on,
    toggle,
    reset,
  };
};

// our custom reducer doesn't allow the state to be false
const customReducer = (state: State, action: Action): State => {
  if (action.type === "toggle" && !state.on) {
    return {
      on: true,
    };
  }
  return state;
};

// The component demonstrates the state reducer pattern
const StateReducer = () => {
  // using default toggler
  const {
    on: defaultOn,
    toggle: defaultToggle,
    reset: defaultReset,
  } = useToggle();

  // using toggler with custom reducer
  const {
    on: customOn,
    toggle: customToggle,
    reset: customReset,
  } = useToggle(customReducer);

  return (
    <div className="space-y-4 h-screen w-full">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Default Reducer</h2>
        <div className="space-x-2">
          <button onClick={defaultToggle}>
            Toggle : {defaultOn ? "on" : "off"}
          </button>
          <button onClick={defaultReset}>Reset</button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">
          Custom Reducer (can't toggle off)
        </h2>
        <div className="space-x-2">
          <button onClick={customToggle}>
            Toggle : {customOn ? "on" : "off"}
          </button>
          <button onClick={customReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StateReducer;
