import React from "../../../../screens/node_modules/@types/react";

import Standard from "./standard";
import Partial from "./partial";
import WithGradient from "./with-gradient";
import Grouped from "./grouped";
import ShowcaseCard from "../showcase-card";

const LineChart = () => (
  <ShowcaseCard title="Line chart">
    <Standard />
    <Partial />
    <WithGradient />
    <Grouped />
  </ShowcaseCard>
);

export default LineChart;
