import React from 'react';
import OfferSlider from '../offerSlider/Offerslider';
import './orderSection.css';
import RecentOrders from '../recentOrders';

const OrderSection: React.FC = () => {
    return (
       <div className='orderSection-wrapper'>
          <div className='container'>
            <div className='d-flex custom-gap'>
                <div className='recentOrder'>
                    <RecentOrders />
                </div>
                <div className='OfferSlider'>
                <OfferSlider />
                </div>
            </div>
       </div>
       </div> 
     
    )
}


export default OrderSection;