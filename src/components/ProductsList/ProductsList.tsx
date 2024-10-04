import React from "react";
import { useList } from "@refinedev/core";
import { Typography, Spin, Card, Col, Row } from "antd";
import { useParams } from "react-router-dom";

const ProductsList: React.FC = () => {
    const { id: categoryId } = useParams<{ id: string }>();

    const { data, isLoading, error } = useList({
        resource: "products",
        filters: [
            {
                field: "category.id",
                operator: "eq",
                value: categoryId,
                
            },
        ],
    });

    if (isLoading) {
        return <Spin size="large" style={{ display: 'block', margin: '20px auto' }} />;
    }

    if (error) {
        return <Typography.Text type="danger">Error: {error.message}</Typography.Text>;
    }

    return (
        <div>
            <h2>Products</h2>
            <Row gutter={16}>
                {data?.data?.map(product => (
                    <Col span={8} key={product.id}>
                        <Card
                            title={product.name}
                            bordered={false}
                            style={{ marginBottom: '20px' }}
                        >
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductsList;
