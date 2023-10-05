import './App.css';
import PreNavBar from './components/PreNavBar.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Slider from "./components/Slider.js";
import Data from "./data/data.json";
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProducts from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOpt from './components/NavOpt.js';

function App() {
  return (
    <Router>
      <PreNavBar />
      <NavBar />
      <NavOpt miPhones={Data.miPhones} redmiPhones={Data.redmiPhones} tv={Data.tv} laptop={Data.laptop} fitnessAndLifestyle={Data.fitnessAndLifeStyle} 
              home = {Data.home} accessories={Data.accessories} audio={Data.audio} />

      <Slider start={Data.banner.start} />
      <Offers offer={Data.offer} />
      
      <Heading text = "STAR PRODUCTS" />
      <StarProducts starproducts={Data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route path="/music" element = {
        <HotAccessories music={Data.hotAccessories.music} musicCover={Data.hotAccessoriesCover.music} />}
        />
        <Route path="/smartDevices" element = {
        <HotAccessories smartDevices={Data.hotAccessories.smartDevice} smartDevicesCover={Data.hotAccessoriesCover.smartDevice} />}
        />
        <Route path="/home" element = {
        <HotAccessories home={Data.hotAccessories.home} homeCover={Data.hotAccessoriesCover.home} />}
        />
        <Route path="/lifestyle" element = {
        <HotAccessories lifestyle={Data.hotAccessories.lifeStyle} lifestyleCover={Data.hotAccessoriesCover.lifeStyle} />}
        />
        <Route path="/mobileAccessories" element = {
        <HotAccessories mobileAccessories={Data.hotAccessories.mobileAccessories} mobileAccessoriesCover={Data.hotAccessoriesCover.mobileAccessories} />}
        />
      </Routes>
      
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={Data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={Data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner end={Data.banner.end} />

      <Footer footer={Data.footer}/>

    </Router>
  );
}

export default App;
