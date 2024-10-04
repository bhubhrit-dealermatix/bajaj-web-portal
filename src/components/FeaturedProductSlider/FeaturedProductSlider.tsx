import React from 'react';
import { Carousel, Card, Row, Col, Button } from 'antd';
import './FeaturedProductSlider.css';
import image from '../../images/product_image.png';

interface FeaturedProduct {
    itemName: string;
    itemImage: string;
    itemQuantity: number;
    itemMRP: number;
    itemMPP: number;
    inStock: boolean;
}

const featuredProducts: FeaturedProduct[] = [
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true
    },
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 50,
        itemMRP: 42,
        itemMPP: 37,
        inStock: false
    },
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 120,
        itemMRP: 50,
        itemMPP: 45,
        inStock: true
    },
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 80,
        itemMRP: 48,
        itemMPP: 43,
        inStock: true
    },
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 90,
        itemMRP: 40,
        itemMPP: 35,
        inStock: false
    },
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 90,
        itemMRP: 40,
        itemMPP: 35,
        inStock: false
    },
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 90,
        itemMRP: 40,
        itemMPP: 35,
        inStock: false
    },
    {
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 90,
        itemMRP: 40,
        itemMPP: 35,
        inStock: false
    },
];

const chunkArray = (arr: FeaturedProduct[], size: number): FeaturedProduct[][] => {
    const chunks: FeaturedProduct[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const FeaturedProductsSlider: React.FC = () => {
    const productChunks = chunkArray(featuredProducts, 4);

    return (
        <div className='feature-wrapper'>
            <div style={{ padding: '0 40px' }}>
            <div style={{ position: 'relative', padding: '20px 0' }}>
                <div className="slider-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div>
                        <h2 className='component-heading primary-color'>Featured Products</h2>
                        <p style={{ marginTop: '5px', color: '#7a7a7a' }}>
                        Parts That Keep You Moving Forward. 
                        </p>
                    </div>
                    <Button type="primary" size="large" className='primary-button primary-background'>VIEW ALL</Button>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <Carousel dots={false} arrows={true}>
                    {productChunks.map((chunk, index) => (
                        <div key={index}>
                            <Row gutter={16} justify="center">
                                {chunk.map((product, productIndex) => (
                                    <Col span={6} key={productIndex}>
                                        <Card
                                            hoverable
                                            className="product-card"
                                            cover={<img alt={product.itemName} src={product.itemImage} className="product-image p-3 " />}
                                        >

                                            <p style={{ margin: '5px 0', textAlign: 'right', color: product.inStock ? 'green' : 'red' }}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </p>

                                            <>
                                                <b>{product.itemName}</b>
                                                <p style={{ margin: '5px 0' }} className='d-flex justify-content-between align-items-center' >
                                                    <div className='para-box'>
                                                    <span style={{ fontSize: '12px' }}>MPP ₹{product.itemMPP}</span>
                                                    <span style={{ marginLeft: '10px', fontSize: '12px', color: '#7a7a7a' }}>MRP ₹{product.itemMRP}</span>
                                                    </div>
                                                   <div className='quantity-box'>
                                                   <span><Button>-</Button>
                                                    <span>{product.itemQuantity}</span>
                                                    <Button>+</Button></span>
                                                   </div>
                                                    
                                                </p>
                                            </>


                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
        </div>
        
    );
};

export default FeaturedProductsSlider;
