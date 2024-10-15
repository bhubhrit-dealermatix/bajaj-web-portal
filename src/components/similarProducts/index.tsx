import React from 'react';
import { Carousel, Col, Button, Flex } from 'antd';
import './style.css';
import image from '../../images/product_image.png';
import ProductCard from '../productCard';

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

const featuredProducts: FeaturedProduct[] = [
    {
        itemId: "1",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 4,    
        ratingCount: 126,
        itemCode:"CLH01",
    },
    {
        itemId: "2",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 3,    
        ratingCount: 100,
        itemCode:"CLH01",
    },
    {
        itemId: "3",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 3.5,    
        ratingCount: 256,
        itemCode:"CLH01",
    },
    {
        itemId: "4",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 4,    
        ratingCount: 300,
        itemCode:"CLH01",
    },
    {
        itemId: "5",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 4,    
        ratingCount: 300,
        itemCode:"CLH01",
    },
    {
        itemId: "6",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 4,    
        ratingCount: 300,
        itemCode:"CLH01",
    },
    {
        itemId: "7",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 4,    
        ratingCount: 300,
        itemCode:"CLH01",
    },
    {
        itemId: "8",
        itemName: "CrankCase LH",
        itemImage: `${image}`,
        itemQuantity: 100,
        itemMRP: 45,
        itemMPP: 40,
        inStock: true,
        description: "Crankcase LH refers to the left-hand side component of an engine's crankcase, housing the crankshaft assembly. It supports lubrication and contributes to the engine's overall functionality and performance.", 
        rating: 4,    
        ratingCount: 300,
        itemCode:"CLH01",
    },
];

const chunkArray = (arr: FeaturedProduct[], size: number): FeaturedProduct[][] => {
    const chunks: FeaturedProduct[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const SimilarProductsSlider: React.FC = () => {
    const productChunks = chunkArray(featuredProducts, 4);

    return (
        <div className='section-spacing_topp'>
            <div>
                <div style={{ position: 'relative'}}>
                    <div className="slider-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h2 className='component-heading'>Similar Products</h2>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'relative' }} className='featuredslider'>
                    <Carousel dots={false} arrows={true}>
                        {productChunks.map((chunk, index) => (
                            <React.Fragment key={index}>
                                <Flex align='center' style= {{columnGap:"calc(4%/3)"}}  >                            
                                {chunk.map(({ itemId, itemName, itemImage, itemMRP, itemMPP, inStock, description, rating, ratingCount, itemCode }) => (
                                        <Col  key={itemId} style={{width:"24%"}}>
                                            <ProductCard
                                                itemId={itemId}
                                                itemName={itemName}
                                                itemImage={itemImage}
                                                itemMRP={itemMRP}
                                                itemMPP={itemMPP}
                                                inStock={inStock}
                                                description={description}
                                                rating={rating}
                                                ratingCount={ratingCount}
                                                itemCode={itemCode}
                                            />
                                        </Col>
                                    ))}
                                </Flex>
                            </React.Fragment>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default SimilarProductsSlider;
