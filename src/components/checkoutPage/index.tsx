import React, { useState } from "react";
import { Typography, Radio, Space, Button, Card, Flex } from "antd";
import "./style.css";

const { Title, Text } = Typography;

const AddressSelection = () => {
    const [selectedAddress, setSelectedAddress] = useState(1);
    const addresses = [
        {
            id: 1,
            name: "Shyam Verma",
            address: "Vishal Nagar, Pimpri Chinchwad, Pune - 411027",
            latLong: "18.5204° N, 73.8567° E",
        },
        {
            id: 2,
            name: "Rahul Sharma",
            address: "Balewadi High Street, Balewadi, Pune - 411027",
            latLong: "18.5204° N, 73.8567° E",
        },
        {
            id: 3,
            name: "Rahul Sharma",
            address: "Balewadi High Street, Balewadi, Pune - 411027",
            latLong: "18.5204° N, 73.8567° E",
        },
    ];

    const handleChange = (e) => {
        setSelectedAddress(e.target.value);
    };
    const [selectedTime, setSelectedTime] = useState<string | null>(null);


    const timeSlots = [
        "09.00 - 10:00", "10.00 - 11:00", "11.00 - 12:00", "12.00 - 13:00",
        "13.00 - 14:00", "14.00 - 15:00", "15.00 - 16:00", "16.00 - 17:00",
        "17.00 - 18:00", "18.00 - 19:00"
    ];

    return (
        <div className="main-container-fluid section-spacing_top section-spacing_bottom checkout-layout">
            <Title level={2} className="page-heading">Checkout</Title>
            <Card className="card-shadow card-spacing">
                <Title level={4} className="page-heading_border">Select Address</Title>
                <Radio.Group onChange={handleChange} value={selectedAddress}>
                    <Space direction="vertical" className="address-custom">
                        {addresses.map((address) => (
                            <div key={address.id} className="custom-styling">
                                <Flex style={{ alignItems: "flex-start" }}>
                                    <Radio value={address.id} style={{ marginRight: 8 }} className="radio-color" />
                                    <div className="spacing-left">
                                        <Text>Address {address.id}:</Text>
                                        <br />
                                        <Text strong>{address.name}</Text>
                                        <br />
                                        <Text>{address.address}</Text>
                                        <br />
                                        <Text type="secondary" className="custom-font">Lat, Long: {address.latLong}</Text>
                                    </div>
                                </Flex>
                                <Button type="link" className="underline-button">Edit</Button>
                            </div>
                        ))}
                    </Space>
                </Radio.Group>
            </Card>
            <Card className="card-shadow card-spacing">
                <Title level={4} className="page-heading_border">Select Delivery Preference</Title>
                <Space direction="vertical" className="address-custom">
                    <Flex>
                    <div className="custom-styling custom-margin">
                        <div>
                            <Typography.Text strong>Express Delivery:</Typography.Text>
                            <div> <Radio value="express">
                            <Text type="secondary" className="custom-font">
                                Delivery within 2 days on selected address{' '}
                            </Text>
                                <br/>
                                <Typography.Text strong>₹ 50.00 Extra Cost</Typography.Text>
                            </Radio></div>
                           
                        </div>
                        <div>
                            <Typography.Text strong>Standard Delivery:</Typography.Text>
                            <div>
                                <Radio value="standard">
                                <Text type="secondary" className="custom-font">
                                Delivery by 27/09/2024{' '}
                                </Text>
                                <br/>
                                <Typography.Text strong>Free</Typography.Text>
                            </Radio></div>
                            
                        </div>
                    </div>
                    </Flex>
                    <Text type="secondary" className="custom-font">
                        Choose a courier delivery time convenient for you:
                    </Text>
                    <Typography.Text strong>Monday, 27</Typography.Text>

                    <Flex style={{flexWrap: 'wrap'}}>
                        {timeSlots.map((slot, index) => (
                            <div key={index} className="button-custom-style">
                                <Button
                                    type={selectedTime === slot ? 'primary' : 'default'}
                                    onClick={() => setSelectedTime(slot)}
                                >
                                    {slot}
                                </Button>
                            </div>
                        ))}
                    </Flex>
                </Space>
            </Card>
        </div>
    );
};

export default AddressSelection;
