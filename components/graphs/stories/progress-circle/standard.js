import React from "../../../../screens/node_modules/@types/react";
import { ProgressCircle } from "../../../src";

class ProgressCircleExample extends React.PureComponent {
  render() {
    return (
      <ProgressCircle
        style={{ height: 200 }}
        progress={0.4}
        progressColor={"rgb(134, 65, 244)"}
      />
    );
  }
}

export default ProgressCircleExample;
