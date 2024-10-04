import Slider from "../components/Slider/index";
import EnsureAuthenticity from "../components/Authenticity/Authenticity";
import PartFilter from "../components/PartFilter/PartFilter";
import FeaturedProductsSlider from "../components/FeaturedProductSlider/FeaturedProductSlider";
import MainFooter from "../components/mainFooter";
import OrderSection from "../components/orderSection";

const App = () => {
  return (
    <>
      <Slider />
      <PartFilter/>
      <FeaturedProductsSlider/>
      <EnsureAuthenticity />
      <OrderSection/>
      <MainFooter/>
    </>
  );
};

export default App;
