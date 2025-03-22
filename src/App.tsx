import "./App.css";
import UseState from "./hooksExamples/UseState";
import UseEffect from "./hooksExamples/UseEffect";
import UseRef from "./hooksExamples/UseRef";
import Memo from "./Memo/Memo";
import RecursiveComponent from "./patternsExamples/RecursiveComponent";
import ContextModule from "./patternsExamples/contextModule/ContextModule";
import CompoundComponent from "./patternsExamples/compoundComponent/CompoundComponent";
import PropGetters from "./patternsExamples/propGetters/PropGetters";
import UseReducer from "./hooksExamples/UseReducer";

function App() {
  return (
    <>
      {/* hooks */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      <UseReducer />
      {/* <Memo /> */}

      {/* patterns */}
      {/* <RecursiveComponent /> */}
      {/* <ContextModule /> */}
      {/* <CompoundComponent /> */}
      {/* <PropGetters /> */}
    </>
  );
}

export default App;
