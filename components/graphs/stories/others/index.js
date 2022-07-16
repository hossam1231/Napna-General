import React from "../../../../screens/node_modules/@types/react";
import YMinMax from "./y-min-max";
import XMinMax from "./x-min-max";
import LayeredChart from "./layered-charts";
import ShowcaseCard from "../showcase-card";

const Others = () => (
  <ShowcaseCard title="Other">
    <YMinMax />
    <XMinMax />
    <LayeredChart />
  </ShowcaseCard>
);

export default Others;
