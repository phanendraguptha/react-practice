import "./App.css";
import UseState from "./hooksExamples/UseState";
import UseEffect from "./hooksExamples/UseEffect";
import UseRef from "./hooksExamples/UseRef";
import UseReducer from "./hooksExamples/UseReducer";
import UseCallback from "./hooksExamples/UseCallback";
import UseMemo from "./hooksExamples/UseMemo";
import Memo from "./Memo/Memo";
import RecursiveComponent from "./patternsExamples/RecursiveComponent";
import ContextModule from "./patternsExamples/contextModule/ContextModule";
import CompoundComponent from "./patternsExamples/compoundComponent/CompoundComponent";
import PropGetters from "./patternsExamples/propGetters/PropGetters";
import StateReducer from "./patternsExamples/stateReducer/StateReducer";

function App() {
  return (
    <>
      {/* hooks */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <UseCallback /> */}
      <UseMemo />
      {/* <Memo /> */}

      {/* patterns */}
      {/* <RecursiveComponent /> */}
      {/* <ContextModule /> */}
      {/* <CompoundComponent /> */}
      {/* <PropGetters /> */}
      {/* <StateReducer /> */}
    </>
  );
}

export default App;
