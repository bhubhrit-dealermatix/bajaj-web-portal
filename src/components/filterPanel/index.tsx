import React, { useState } from "react";
import { Flex, Layout, Card, Tag } from "antd";
import type { RadioChangeEvent } from "antd";
import { Button, Radio, Space, Checkbox, Col, Row, Slider } from "antd";
import type { GetProp } from "antd";
import image from "../../images/product_image.png";
import ProductCard from "../productCard";
import "./style.css";

const { Sider, Content } = Layout;

interface FeaturedProduct {
  itemId: string;
  itemName: string;
  itemImage: string;
  itemQuantity: number;
  itemMRP: number;
  itemMPP: number;
  inStock: boolean;
  description: string;
  rating: number;
  ratingCount: number;
  itemCode: string;
}

// const headerStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   height: 64,
//   paddingInline: 48,
//   lineHeight: "64px",
//   backgroundColor: "#4096ff",
// };

const siderStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "0.5rem 0 0",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
};

const cardStyle = {
  padding: "10px",
  marginBottom: "1rem",
};

const featuredProducts: FeaturedProduct[] = [
  {
    itemId: "1",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 4,
    ratingCount: 126,
    itemCode: "CLH01",
  },
  {
    itemId: "2",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 3,
    ratingCount: 100,
    itemCode: "CLH01",
  },
  {
    itemId: "3",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 3.5,
    ratingCount: 256,
    itemCode: "CLH01",
  },
  {
    itemId: "4",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 4,
    ratingCount: 300,
    itemCode: "CLH01",
  },
  {
    itemId: "5",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 4,
    ratingCount: 300,
    itemCode: "CLH01",
  },
  {
    itemId: "6",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 4,
    ratingCount: 300,
    itemCode: "CLH01",
  },
  {
    itemId: "7",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 4,
    ratingCount: 300,
    itemCode: "CLH01",
  },
  {
    itemId: "8",
    itemName: "CrankCase LH",
    itemImage: `${image}`,
    itemQuantity: 100,
    itemMRP: 45,
    itemMPP: 40,
    inStock: true,
    description:
      "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.",
    rating: 4,
    ratingCount: 300,
    itemCode: "CLH01",
  },
];

const tagsData = ["% Sale", "Same Day Delivery", "Available to Order"];

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>(["% Sale"]);
  const handleTagChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  const [modelValue, setModelValue] = useState("Boxer Model BM 150cc");
  const onModelChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setModelValue(e.target.value);
  };

  function showMoreModels() {
    const modelsList = document.getElementById("show-models-list");
    if (modelsList != null) {
      if (
        modelsList.style.display === "none" ||
        modelsList.style.display === ""
      ) {
        modelsList.style.display = "block";
      } else {
        modelsList.style.display = "none";
      }
    }
  }

  const [checked, setChecked] = useState(true);
  const onBrandChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  const onFamilyChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  const onSegmentChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <Flex gap="middle" wrap style={{ marginTop: "40px" }}>
      <Layout style={layoutStyle} className="filter-panel">
        {/* <div style={headerStyle}>Header</div> */}
        <Layout>
          <Sider width="25%" style={siderStyle}>
            <Card
              size="small"
              title="Status"
              className="status-card"
              style={cardStyle}
            >
              {tagsData.map<React.ReactNode>((tag) => (
                <Tag.CheckableTag
                  key={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={(checked) => handleTagChange(tag, checked)}
                >
                  {tag}
                </Tag.CheckableTag>
              ))}
            </Card>
            <Card
              size="small"
              title="Price"
              className="models-card"
              style={cardStyle}
            >
              <Slider range defaultValue={[340, 1250]} min={200} max={3000} />
            </Card>
            <Card
              size="small"
              title="Models"
              className="models-card"
              style={cardStyle}
            >
              <Radio.Group onChange={onModelChange} value={modelValue}>
                <Space direction="vertical">
                  <Radio value={"Boxer Model BM 150cc"}>
                    <span>Boxer Model BM 150cc</span> <Tag>12</Tag>
                  </Radio>
                  <Radio value={"Boxer Model BM 100cc"}>
                    <span>Boxer Model BM 100cc</span> <Tag>47</Tag>
                  </Radio>
                  <Radio value={"Boxer Model BM 150 & BM 100KS"}>
                    <span>Boxer Model BM 150 & BM 100KS</span> <Tag>52</Tag>
                  </Radio>
                </Space>
                <Button type="text" onClick={showMoreModels}>
                  Show more
                </Button>
                <Space
                  direction="vertical"
                  id="show-models-list"
                  style={{ display: "none" }}
                >
                  <Radio value={"Boxer Model BM1 150cc"}>
                    Boxer Model BM1 150cc <Tag>12</Tag>
                  </Radio>
                  <Radio value={"Boxer Model BM2 100cc"}>
                    Boxer Model BM2 100cc <Tag>47</Tag>
                  </Radio>
                  <Radio value={"Boxer Model BM3 150 & BM 100KS"}>
                    Boxer Model BM 1503 & BM 100KS <Tag>52</Tag>
                  </Radio>
                </Space>
              </Radio.Group>
            </Card>
            <Card
              size="small"
              title="Brand"
              className="brand-card"
              style={cardStyle}
            >
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={onBrandChange}
              >
                <Row style={{ rowGap: "8px" }}>
                  <Col span={24}>
                    <Checkbox value="" checked={checked}>
                      None <Tag>12</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="cummins">
                      Cummins <Tag>48</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="onam">
                      Onam <Tag>52</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="fleetguard">
                      FleetGuard <Tag>47</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="valvoline">
                      Valvoline <Tag>13</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="webasto">
                      Webasto <Tag>112</Tag>
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Card>
            <Card
              size="small"
              title="Item Family"
              className="item-family-card"
              style={cardStyle}
            >
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={onFamilyChange}
              >
                <Row style={{ rowGap: "8px" }}>
                  <Col span={24}>
                    <Checkbox value="" checked>
                      None <Tag>13</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Engine Parts">
                      Engine Parts <Tag>28</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="QSK Parts">
                      QSK Parts <Tag>47</Tag>
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Turbo Diesel Filter">
                      Turbo Diesel Filter <Tag>56</Tag>
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Card>
            <Card
              size="small"
              title="Item Segment"
              className="item-segment-card"
              style={cardStyle}
            >
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={onSegmentChange}
              >
                <Row style={{ rowGap: "8px" }}>
                  <Col span={24}>
                    <Checkbox value="" checked>
                      None
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Cummins Maintainance Tool Kit">
                      Cummins Maintainance Tool Kit
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Onam Maintainance Tool Kit">
                      Onam Maintainance Tool Kit
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Valvoline Maintainance Tool Kit">
                      Valvoline Maintainance Tool Kit
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Card>
            <Card
              size="small"
              title="Item Signature"
              className="item-signature-card"
              style={cardStyle}
            >
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={onSegmentChange}
              >
                <Row style={{ rowGap: "8px" }}>
                  <Col span={24}>
                    <Checkbox value="" checked>
                      None
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Cummins">Cummins</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Card>
          </Sider>
          <Content>
            <div className="padding-custom">
              <Row gutter={16}>
                {featuredProducts.map((product) => (
                  <Col
                    xs={{ flex: "100%" }}
                    sm={{ flex: "50%" }}
                    lg={{ flex: "calc(100%/3)" }}
                    key={product.itemId}
                  >
                    <ProductCard {...product} />
                  </Col>
                ))}
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default App;
