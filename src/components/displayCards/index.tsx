import React, { useState, useEffect } from "react";
import { Card, Flex, Avatar } from "antd";
import { HeartFilled } from "@ant-design/icons";
import "./style.css";

const App: React.FC = () => {
  const [cardStyle, setCardStyle] = React.useState({
    width: "23%",
    padding: "10px",
  });
  const [rowGap, setRowGap] = React.useState("calc(8%/3)");
  const updateStyle = () => {
    if (window.innerWidth <= 767) {
      setCardStyle({ width: "48%", padding: "10px" });
      setRowGap("4%");
    } else {
      setCardStyle({ width: "23%", padding: "10px" });
      setRowGap("calc(8%/3)");
    }
  };
  useEffect(() => {
    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => {
      window.removeEventListener("resize", updateStyle);
    };
  }, []);
  return (
    <div className="main-container">
      <Flex wrap gap={rowGap} align="center">
        <Card
          size="small"
          title={
            <span>
              <Avatar icon={<HeartFilled />} style={{ marginRight: 8 }} />
              Favourite List
            </span>
          }
          style={cardStyle}
        >
          <p>
            Create a list for your most frequently ordered products and add it
            to basket with one click
          </p>
        </Card>
        <Card size="small" title="Delivery Updates" style={cardStyle}>
          <p>
            We will send you updates as soon as your order has been picked and
            has left our warehouse
          </p>
        </Card>
        <Card size="small" title="Re-Order" style={cardStyle}>
          <p>
            Place an order quickly by re-ordering one of your previous partner
            shop orders
          </p>
        </Card>
        <Card size="small" title="24/7 Ordering" style={cardStyle}>
          <p>
            Place your order from whenever it suits you with 24/7 ordering from
            any device.
          </p>
        </Card>
      </Flex>
    </div>
  );
};

export default App;
