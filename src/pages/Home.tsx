import Slider from "../components/slider/index";
import EnsureAuthenticity from "../components/authenticity";
import PartFilter from "../components/partFilter";
import FeaturedProductsSlider from "../components/featuredProductSlider";
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
