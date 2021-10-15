import React from "react";

import { Breadcrumb, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ResponsiveBarCanvas } from "@nivo/bar";
export default function Barchart() {
  const history = useHistory();
  const data = [
    {
      month: "Apr 2021",
      customer: 10000,
    },
    {
      month: "May 2021",
      customer: 13200,
    },
    {
      month: "Jun 2021",
      customer: 17400,
    },
    {
      month: "Jul 2021",
      customer: 15300,
    },
    {
      month: "Aug 2021",
      customer: 19600,
    },
  ];
  function BreadCruib() {
    const path = history.location.pathname.split("/");
    return path.map((ele, i) => {
      return (
        <Breadcrumb.Item
          active={path.length === i + 1 ? true : false}
          key={i}
          href={`/${ele}`}
        >
          {ele}
        </Breadcrumb.Item>
      );
    });
  }
  return (
    <Container style={{ height: 700, width: 1000 }}>
      <Breadcrumb>
        <BreadCruib />
      </Breadcrumb>
      <Container>Customer Vs Month</Container>

      <ResponsiveBarCanvas
        data={data}
        keys={["customer"]}
        indexBy="month"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        pixelRatio={1.25}
        padding={0.15}
        innerPadding={0}
        minValue="auto"
        maxValue="auto"
        groupMode="grouped"
        layout="vertical"
        reverse={false}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: false }}
        colors="#3ae868"
        colorBy="id"
        borderWidth={5}
        borderRadius={9}
        borderColor="#1b28de"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Customers",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        enableGridX={false}
        enableGridY={false}
        enableLabel={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        isInteractive={true}
        legends={[]}
      />
    </Container>
  );
}
