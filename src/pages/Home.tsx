import Slider from "../components/slider/index";
import EnsureAuthenticity from "../components/partAuthenticity";
import PartFilter from "../components/partFilter";
import FeaturedProducts from "../components/featuredProducts";
import RecentOrders from "../components/recentOrders";
import OfferSlider from "../components/offerSlider";
import {Row, Col} from 'antd'
import VideoGallerySlider from "../components/videoGallerySlider";

const App = () => {
  return (
    <>
      <Slider />
      <PartFilter/>
      <div className="main-container section-spacing_top section-spacing_bottom">
        <Row gutter={[30, 30]} style={{ width: '100%' }} className="">
          <Col xs={24} sm={24} md={10} lg={8} xl={8} style={{ paddingLeft: '0px'  }}>
            <div className="order-section">
              <RecentOrders />
            </div>
          </Col>
          <Col xs={24} sm={24} md={14} lg={16} xl={16}  style={{ paddingRight: '0px'  }}>
            <div className="offer-section">
              <OfferSlider />
            </div>
          </Col>
        </Row>
      </div>
      <EnsureAuthenticity />
      <FeaturedProducts/>
      <VideoGallerySlider/>
    </>
  );
};

export default App;
