import React from "react";
import { Carousel } from "antd";
import Banner1 from "../../images/BannerImg.png";
import './style.css'

const imageStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
};

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} style={{ marginTop: "-64px" }} dots={false} arrows={true}>
      <div>
        <img src={Banner1} alt="" style={imageStyle}/>
      </div>
      <div>
        <img src={Banner1} alt="" style={imageStyle}/>
      </div>
      <div>
        <img src={Banner1} alt="" style={imageStyle}/>
      </div>
    </Carousel>
  );
};

export default App;
