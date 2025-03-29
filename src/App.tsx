import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import UseState from "./hooksExamples/UseState";
import UseEffect from "./hooksExamples/UseEffect";
import UseLayoutEffect from "./hooksExamples/UseLayoutEffect";
import UseRef from "./hooksExamples/UseRef";
import UseReducer from "./hooksExamples/UseReducer";
import UseCallback from "./hooksExamples/UseCallback";
import UseMemo from "./hooksExamples/UseMemo";
import UseActionState from "./hooksExamples/UseActionState";
import UseOptimistic from "./hooksExamples/UseOptimistic";
import Memo from "./Memo/Memo";
import RecursiveComponent from "./patternsExamples/RecursiveComponent";
import ContextModule from "./patternsExamples/contextModule/ContextModule";
import CompoundComponent from "./patternsExamples/compoundComponent/CompoundComponent";
import PropGetters from "./patternsExamples/propGetters/PropGetters";
import StateReducer from "./patternsExamples/stateReducer/StateReducer";
function App() {
  return (
    <ErrorBoundary fallback={<div>An Error has occurred</div>}>
      {/* hooks */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseActionState /> */}
      <UseOptimistic />
      {/* <Memo /> */}

      {/* patterns */}
      {/* <RecursiveComponent /> */}
      {/* <ContextModule /> */}
      {/* <CompoundComponent /> */}
      {/* <PropGetters /> */}
      {/* <StateReducer /> */}
    </ErrorBoundary>
  );
}

export default App;
