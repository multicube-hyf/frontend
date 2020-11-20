import React from "react";
import Progress from "../components/progress/Progress";
//import Rectangle from '../components/rectangle/Rectangle';
import SelectNumbers from "../components/selectNumbers/SelectNumbers";

function Exercise1() {
  return (
    <div>
      <Progress stepsNumber={5} completedStepsCount={2} />
      <SelectNumbers numToFind={5} />
    </div>
  );
}

export default Exercise1;
