import React, { useState } from 'react';
import { Button, Rate, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.css';
import ToggleBtn from '../toggleBtn'

interface ProductCardProps {
    itemId: string;
    itemName: string;
    itemImage: string;
    itemMRP: number;
    itemMPP: number;
    inStock: boolean;
    description: string;
    rating: number;
    ratingCount: number;
    quantity?: number;
    itemCode: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    itemId,
    itemName,
    itemImage,
    itemMRP,
    itemMPP,
    inStock,
    description,
    rating,
    ratingCount,
    quantity = 1,
    itemCode,
}) => {
    const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/product/${itemId}`, {
            state: {
                itemId,
                itemName,
                itemImage,
                itemMRP,
                itemMPP,
                inStock,
                description,
                rating,
                ratingCount,
                quantity: currentQuantity,
                itemCode,
            },
        });
    };

    const incrementQuantity = () => {
        if (inStock) {
            setCurrentQuantity((prev) => prev + 1);
        }
    };

    const decrementQuantity = () => {
        setCurrentQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const imageSrc = itemImage || 'path/to/placeholder.png';

    return (
        <div className="product-card" onClick={handleProductClick}>
            <div className='product-image_container'><img alt={itemName} src={imageSrc} className="product-image" /></div>
            <div className="card-header">
                <div className="rating">
                    <Rate allowHalf value={rating} disabled className="custom-rate" />
                    <div>{rating}/5</div>
                    <span>({ratingCount})</span>
                </div>
                <p className={`stock-status ${!inStock ? 'out-of-stock' : ''}`}>
                   {inStock ? 'In Stock' : 'Out of Stock'}
                </p>
            </div>
            <div className='product_name'>{itemName}</div>
            <div className="card-footer">
                <Flex>
                <p className='custom-padd_right'>MPP <br /> {itemMPP}</p> 
                <p className="custom-padd_left">MRP <br /> ₹{itemMRP}</p>
                </Flex>
                 <ToggleBtn 
                      inStock={inStock}
                      itemQuantity={currentQuantity}
                      
                 /> 

            </div>
        </div>
    );
};

export default ProductCard;
