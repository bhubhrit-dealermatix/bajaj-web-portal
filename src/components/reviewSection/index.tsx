import React from "react";
import { Typography, Rate, Progress, List, Space, Button, Row, Col } from "antd";
import {
    LikeOutlined,
    DislikeOutlined,
    EditOutlined,
    CheckCircleOutlined,
    UndoOutlined,
    StarFilled,
} from "@ant-design/icons";
import './style.css';

const { Title, Text } = Typography;

const reviewsData = {
    rating: 4.5,
    totalReviews: 68,
    ratingsDistribution: [37, 16, 9, 4, 3],
    reviews: [
        {
            name: "Rafael Marquez",
            date: "June 28, 2023",
            rating: 4,
            color: "Blue",
            model: "128GB",
            pros: "Premium device, and it comes with a high price tag",
            cons: "Does not have a headphone jack",
            review:
                "The phone has a new A15 Bionic chip, which makes it lightning-fast and responsive. The camera system has also been upgraded, and it now includes a 12-megapixel ultra-wide lens and a 12-megapixel wide lens.",
            likes: 0,
            dislikes: 0,
            verified: true,
        },
    ],
};

const ReviewsSection: React.FC = () => {
    const { rating, totalReviews, ratingsDistribution, reviews } = reviewsData;

    return (
        <div className="section-spacing_topp section-spacing-bottom">
            {/* Header Row */}
            <Row className="align-item_bottom">
                <Col span={4}>
                    <Title level={3}>Reviews</Title>
                </Col>
                <Col span={11} style={{ textAlign: 'right' }}>
                    <Button type="default" icon={<EditOutlined />} className="background-default">
                        Leave a review
                    </Button>
                </Col>
            </Row>

            {/* Rating Distribution and Review Count */}
            <Row>
                <Col span={4}>
                    <div className="rating-custom">
                        <Title className="rating-margin_top">{rating.toFixed(1)}</Title>
                        <Rate className="rating-star" disabled allowHalf value={rating} />
                        <div>{totalReviews} reviews</div>
                    </div>
                </Col>
                <Col span={20}>
                    <div className="rating-left_margin">
                        {ratingsDistribution.map((count, index) => (
                            <Row key={index} align="middle" style={{ marginBottom: "8px" }}>
                                <Col span={1}>
                                    <Text className="star-filled">
                                        {5 - index} <StarFilled />
                                    </Text>
                                </Col>
                                <Col span={11}>
                                    <Progress
                                        percent={(count / totalReviews) * 100}
                                        showInfo={false}
                                        strokeColor="#faad14"
                                        strokeWidth={5}
                                    />
                                </Col>
                                <Col span={1}>
                                    <Text className="count-margin">{count}</Text>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </Col>
            </Row>

            {/* Review List */}
            <List
                itemLayout="vertical"
                dataSource={reviews}
                renderItem={(item) => (
                    <List.Item>
                        <div className="main-rating">
                            <List.Item.Meta
                                title={
                                    <Row className="items-section">
                                        <Col span={6}>
                                            <Space>
                                                <Text strong>{item.name}</Text>
                                                {item.verified && (
                                                    <CheckCircleOutlined style={{ color: "green" }} />
                                                )}
                                            </Space>
                                        </Col>
                                        <Col span={9}>
                                            <div className="date-section">
                                                <Text type="secondary">{item.date}</Text>
                                            </div>
                                        </Col>
                                    </Row>
                                }
                                description={
                                    <div>
                                        {/* Rating */}
                                        <Row>
                                            <Col span={14}>
                                                <Rate className="rating-star" allowHalf disabled value={item.rating} />
                                            </Col>
                                        </Row>
                                        {/* Color and Model */}
                                        <Row>
                                            <Col span={14}>
                                                <div className="review">
                                                    <span className="review-font">Color:</span> {item.color}{" "}
                                                    <span className="review-font">Model:</span> {item.model}
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* Review Text */}
                                        <Row>
                                            <Col span={15}>
                                                <p className="review">{item.review}</p>
                                            </Col>
                                        </Row>
                                        {/* Pros and Cons */}
                                        <Row>
                                            <Col span={14}>
                                                <p className="review">
                                                    <b>Pros:</b> {item.pros}
                                                </p>
                                            </Col>
                                            <Col span={14}>
                                                <p className="review">
                                                    <b>Cons:</b> {item.cons}
                                                </p>
                                            </Col>
                                        </Row>

                                        {/* Styled Reply and Like/Dislike Buttons */}
                                        <Row>
                                            {/* Reply button aligned to the left */}
                                            <Col span={6}>
                                                <Button
                                                    icon={<UndoOutlined />}
                                                    className="button-link"
                                                >
                                                    Reply
                                                </Button>
                                            </Col>
                                            {/* Like and Dislike buttons aligned to the right */}
                                            <Col span={9}>
                                                <div className="align-right">
                                                    <Button type="text" icon={<LikeOutlined />}>
                                                        {item.likes}
                                                    </Button>
                                                    <Button type="text" icon={<DislikeOutlined />}>
                                                        {item.dislikes}
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                            />
                        </div>
                    </List.Item>
                )}
            />
           
                <Row>
                    <Col span={15}>
                    <div className="all-section">
                    <Button type="link">Show all reviews</Button>
                    </div>
                    </Col>
        
                </Row>
            
            
        </div>
    );
};

export default ReviewsSection;
