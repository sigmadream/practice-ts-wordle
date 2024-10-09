import React from "react";
import Letter from "./component/Letter";
import { AccuracyEnum } from "./utilities/accuracy.utils";

function App() {
  return (
    <>
      <Letter accuracy={AccuracyEnum.correct} position={0} value="R" />
      <Letter accuracy={AccuracyEnum.doesNotExist} position={1} value="E" />
      <Letter accuracy={AccuracyEnum.wrongPosition} position={2} value="A" />
      <Letter accuracy={AccuracyEnum.wrongPosition} position={3} value="C" />
      <Letter accuracy={AccuracyEnum.correct} position={4} value="T" />
    </>
  );
}

export default App;
