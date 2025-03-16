import "./App.css";
import UseState from "./hooksExamples/UseState";
import UseEffect from "./hooksExamples/UseEffect";
import UseRef from "./hooksExamples/UseRef";
import Memo from "./Memo/Memo";
import RecursiveComponent from "./patternsExamples/RecursiveComponent";
import ContextModule from "./patternsExamples/contextModule/ContextModule";
import CompoundComponent from "./patternsExamples/CompoundComponent";

function App() {
  return (
    <>
      {/* hooks */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}

      {/* <Memo /> */}

      {/* patterns */}
      {/* <RecursiveComponent /> */}
      {/* <ContextModule /> */}
      <CompoundComponent />
    </>
  );
}

export default App;
