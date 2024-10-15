import React, { useState } from 'react';
import { Typography, Image, Row, Col, Carousel, Button , Rate  } from 'antd';
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
        <div className='productdetail_page'>
            <Title level={2} className='component-heading'>Product Detail</Title>
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

                  
                    <Carousel dots={false} slidesToShow={4} arrows={true} className='thumbnail_Slider'>
                        <div
                            onClick={() => handleThumbnailClick(product.itemImage)}
                            style={{
                                padding: '5px',
                                cursor: 'pointer',
                                border: currentImage === product.itemImage ? '3px solid #1890ff' : '2px solid #ddd',
                                borderRadius: '8px',
                            }}
                            className='thumbnail-img' >
                            <Image  src={product.itemImage} alt={`Thumbnail`} preview={false}  />
                        </div>
                    </Carousel>
                </div>
            </Col>

            <Col xs={24} lg={10} className='productDetail_box'>
                <div>
                    <div className='productrating_box'>
                        <Rate allowHalf value={product.rating} disabled className="custom-rate" />
                        <div className='productrating_text'>{product.rating}/5</div>
                        <span className='productrating_count'>({product.ratingCount})</span>
                    </div>
                    
                    <Title level={2} className='productTitle'>
                        {product.itemName} <Text type="success">{product.inStock ? "In Stock" : "Out of Stock"}</Text>
                    </Title>
                    <div className='categoryName'>
                        <Text>{product.itemCode}</Text>
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <Text className='productDescription'>{product.description}</Text>
                    </div>
                    <div style={{ marginTop: '16px' }} className='product-flex'>
                        <div className='productMRP'>
                            <Text>MRP:</Text>   
                            <div className='price'>{`₹${product.itemMRP}`}</div>
                        </div>
                        <div className='productMRP'>
                            <Text>MPP:</Text>
                            <div className='price'>{`₹${product.itemMPP}`}</div>
                        </div>
                    </div>
                    <Row className='productprice_info'>
                        <Col><Text delete className='recentPrice'>₹5000</Text></Col>
                        <Col><Title level={4} className='currentPrice'>₹4599</Title></Col>
                        <Col><div className='custombadge'>Save 9%</div></Col>
                    </Row>

                    <Row gutter={16} align="middle" className='cart_box'>
                        <Col className='quantity-counter quantity-box'>
                            <Row align="middle">
                                <Col><Button
                                icon={<MinusOutlined />}
                                onClick={() => handleQuantityChange('decrease')}
                                disabled={quantity <= 1}
                                /></Col>
                                <Col>
                                <Text strong className='quantity-text'>{quantity < 10 ? `0${quantity}` : quantity}</Text>
                                </Col>
                                <Col>
                                    <Button icon={<PlusOutlined />} onClick={() => handleQuantityChange('increase')} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={14} >
                            <Button type="primary" className='primary-background primary-button cart_btn' style={{ marginLeft: '20px' }}>
                                Add to Cart
                            </Button>
                        </Col>
                    </Row>
                        
                </div>
            </Col>
             </Row>
        </div>
       
    );
};

export default ProductDetailPage;
