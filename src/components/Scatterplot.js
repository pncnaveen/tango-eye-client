import React from "react";
import { ResponsiveScatterPlotCanvas } from "@nivo/scatterplot";
import { Breadcrumb, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Scatterplot() {
  const history = useHistory();
  const data = [
    {
      id: "customer",
      data: [
        {
          x: "2020-05-12",
          y: 4200,
        },
        {
          x: "2020-06-16",
          y: 3800,
        },
        {
          x: "2020-07-02",
          y: 412,
        },
        {
          x: "2020-07-21",
          y: 680,
        },
        {
          x: "2020-07-26",
          y: 830,
        },
        {
          x: "2020-08-30",
          y: 1300,
        },
        {
          x: "2020-08-11",
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
      <Container>Customer Vs Store</Container>

      <ResponsiveScatterPlotCanvas
        data={data}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        axisBottom={{
          format: "%b %d",
          tickValues: "every 2 days",
        }}
      />
    </Container>
  );
}
