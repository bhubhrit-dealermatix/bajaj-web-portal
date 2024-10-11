import React, { useState } from 'react';
import { Typography, Image, Row, Col, Carousel, Button , Rate } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom'; 

import './style.css';

const { Title, Text } = Typography;

const ProductDetailPage = () => {
    const location = useLocation(); 
    const product = location.state; 
    console.log(product , 'products')

    const [currentImage, setCurrentImage] = useState(product.itemImage);
    const [quantity, setQuantity] = useState(1);

    const handleThumbnailClick = (image: string) => {
        setCurrentImage(image);
    };

    const handleQuantityChange = (action: 'increase' | 'decrease') => {
        if (action === 'increase') {
            setQuantity(quantity + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <Row gutter={16} style={{ padding: '0px' }}>
            <Col xs={24} lg={12}>
                <div className='main-productdetail'>
                    <div className='product-section'>
                        <Image
                            src={currentImage}
                            alt={product.itemName}
                            preview={false}
                        />
                    </div>

                  
                    <Carousel dots={false} slidesToShow={4} arrows={true}>
                        <div
                            onClick={() => handleThumbnailClick(product.itemImage)}
                            style={{
                                padding: '5px',
                                cursor: 'pointer',
                                border: currentImage === product.itemImage ? '3px solid #1890ff' : '2px solid #ddd',
                                borderRadius: '8px',
                            }}
                        >
                            <Image width={100} src={product.itemImage} alt={`Thumbnail`} preview={false} />
                        </div>
                    </Carousel>
                </div>
            </Col>

            <Col xs={24} lg={12}>
                <div>
                    <Rate allowHalf value={product.rating} disabled className="custom-rate" />
                    <div>{product.rating}/5</div>
                    <span>({product.ratingCount})</span>
                    <Title level={3}>
                        {product.itemName} <Text type="success">{product.inStock ? "In Stock" : "Out of Stock"}</Text>
                    </Title>
                    <div style={{ marginBottom: '16px' }}>
                        <Text>{product.description}</Text>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <Text delete>{`MRP: ₹${product.itemMRP}`}</Text>
                        <Text style={{ marginLeft: '10px' }}>{`MPP: ₹${product.itemMPP}`}</Text>
                    </div>

                    <Title level={4} type="danger">
                        ₹{product.itemMPP}
                    </Title>

                    <Row gutter={16} align="middle">
                        <Col>
                            <Button
                                icon={<MinusOutlined />}
                                onClick={() => handleQuantityChange('decrease')}
                                disabled={quantity <= 1}
                            />
                        </Col>
                        <Col>
                            <Text strong>{quantity < 10 ? `0${quantity}` : quantity}</Text>
                        </Col>
                        <Col>
                            <Button icon={<PlusOutlined />} onClick={() => handleQuantityChange('increase')} />
                        </Col>
                        <Col>
                            <Button type="primary" style={{ marginLeft: '20px' }}>
                                Add to Cart
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetailPage;
