import React from "react";
import { ResponsivePieCanvas } from "@nivo/pie";
import { Breadcrumb, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Piechart() {
  const history = useHistory();
  const data = [
    {
      store: "Store 1",
      customer: 4200,
    },
    {
      store: "Store 2",
      customer: 3800,
    },
    {
      store: "Store 3",
      customer: 412,
    },
    {
      store: "Store 4",
      customer: 680,
    },
    {
      store: "Store 5",
      customer: 830,
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

      <ResponsivePieCanvas
        data={data}
        id={"store"}
        value={"customer"}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        pixelRatio={2}
        cornerRadius={4}
        colors={{ scheme: "paired" }}
        borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
      />
    </Container>
  );
}
