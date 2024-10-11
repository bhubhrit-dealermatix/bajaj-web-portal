import ProductDetail  from '../components/productDetailsSection';
import ReviewsSection from '../components/reviewSection';
import SimilarProductsSlider from '../components/similarProducts';
const ProductDetailSection = () => {
    return (
      <>
<div className="main-container-fluid section-spacing_top section-spacing_bottom">
<ProductDetail />
<SimilarProductsSlider />
<ReviewsSection />
 
</div>
</>
 );
};
   
export default ProductDetailSection;