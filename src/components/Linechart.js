import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Breadcrumb, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Linechart() {
  const history = useHistory();
  const data = [
    {
      id: "customer",
      data: [
        {
          x: "2015",
          y: 4200,
        },
        {
          x: "2016",
          y: 3800,
        },
        {
          x: "2017",
          y: 412,
        },
        {
          x: "2018",
          y: 680,
        },
        {
          x: "2019",
          y: 830,
        },
        {
          x: "2020",
          y: 1300,
        },
        {
          x: "2021",
          y: 4200,
        },
      ],
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
      <Container>Customer Vs Year</Container>

      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: "linear", min: 2015, max: 2021 }}
        yScale={{ type: "linear", stacked: true, min: 100, max: 5000 }}
        yFormat=".0f"
        debugMesh={true}
        axisBottom={{
          tickValues: 5,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          format: "0",
          legendOffset: 36,
          legendPosition: "middle",
        }}
      />
    </Container>
  );
}
