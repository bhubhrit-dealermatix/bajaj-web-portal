import React from "react";
import { Carousel } from "antd";
import Banner1 from '../../images/offerSlide1.png';
import './Offerslider.css';



const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    
    console.log(currentSlide , 'qfhofh');
  };

  return (
    <Carousel afterChange={onChange} style={{marginTop: "0px"}} className="Swiper" dots={false}  arrows={true}  autoplay={true} autoplaySpeed={2000}>
      <div className="slide">
        <img src={Banner1} alt="" />
      </div>
      <div  className="slide">
        <img src={Banner1} alt="" />
      </div>
      <div  className="slide">
        <img src={Banner1} alt="" />
      </div>
    </Carousel>
  );
};

export default App;