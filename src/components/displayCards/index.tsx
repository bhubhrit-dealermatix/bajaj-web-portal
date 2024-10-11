import React, { useState, useEffect } from "react";
import { Card, Flex, Avatar } from "antd";
import { HeartFilled, TruckFilled } from "@ant-design/icons";
import CartIcon from "../../images/cart.svg";
import ReOrder from "../../images/re-order.svg";
import "./style.css";

const App: React.FC = () => {
  const [cardStyle, setCardStyle] = React.useState({
    width: "24%",
    padding: "12px",
  });
  const [rowGap, setRowGap] = React.useState("calc(4%/3)");
  const updateStyle = () => {
    if (window.innerWidth <= 767) {
      setCardStyle({ width: "48%", padding: "10px" });
      setRowGap("4%");
    } else {
      setCardStyle({ width: "24%", padding: "10px" });
      setRowGap("calc(4%/3)");
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
    <Flex wrap gap={rowGap} align="stretch" style={{marginTop: "40px"}} className="display-card">
      <Card
        size="small"
        title={
          <span>
            <Avatar icon={<HeartFilled />} /> Favourite List
          </span>
        }
        style={cardStyle}
      >
        <p>
          Create a list for your most frequently ordered products and add it to
          basket with one click
        </p>
      </Card>
      <Card
        size="small"
        title={
          <span>
            <Avatar icon={<TruckFilled />} /> Delivery Updates
          </span>
        }
        style={cardStyle}
      >
        <p>
          We will send you updates as soon as your order has been picked and has
          left our warehouse
        </p>
      </Card>
      <Card
        size="small"
        title={
          <span>
            <img src={ReOrder} alt="Cart-icon" /> Re-Order
          </span>
        }
        style={cardStyle}
      >
        <p>
          Place an order quickly by re-ordering one of your previous partner
          shop orders
        </p>
      </Card>
      <Card
        size="small"
        title={
          <span>
            <img src={CartIcon} alt="Re-order" /> 24/7 Ordering
          </span>
        }
        style={cardStyle}
      >
        <p>
          Place your order from whenever it suits you with 24/7 ordering from
          any device.
        </p>
      </Card>
    </Flex>
  );
};

export default App;
