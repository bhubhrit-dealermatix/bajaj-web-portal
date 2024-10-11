import React from "react";
import { Carousel } from "antd";
import Banner1 from "../../images/BannerImg.png";
import "./style.css";

const imageStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
};

const bannerImages = [Banner1, Banner1, Banner1];

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      afterChange={onChange}
      style={{ marginTop: "-64px" }}
      dots={false}
      arrows={true}
      className="home-banner"
    >
      {bannerImages.map((e, i) => (
        <div key={i}>
          <img src={e} alt="" style={imageStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default App;
