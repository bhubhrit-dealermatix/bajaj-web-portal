import React, { useState } from 'react';
import { Button } from 'antd';

interface ToggleBtnProps {
    itemId?: string;  
    itemName?: string;
    itemImage?: string;
    itemQuantity?: number;
    itemMRP?: number;
    itemMPP?: number;
    inStock?: boolean;
    description?: string; 
    rating?: number;      
    ratingCount?: number; 
    itemCode?: string;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({
    itemQuantity,
    inStock,
    itemCode='',
    itemMPP='',
    itemId='',
    itemImage='',
    itemMRP='',
    itemName=''
}) => {
    const [currentQuantity, setCurrentQuantity] = useState(itemQuantity);

    const incrementQuantity = () => {
        setCurrentQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (currentQuantity > 0) {
            setCurrentQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const textStyle = { margin: '0 10px', fontWeight: 'bold' };

    return (
        <div className="quantity-counter quantity-box">
            <Button
                type="default"
                disabled={!inStock}
                onClick={decrementQuantity}
                aria-label="Decrement quantity"
            >
                -
            </Button>
            <span style={textStyle}>{currentQuantity}</span>
            <Button
                type="default"
                disabled={!inStock}
                onClick={incrementQuantity}
                aria-label="Increment quantity"
            >
                +
            </Button>
        </div>
    );
};

export default ToggleBtn;
