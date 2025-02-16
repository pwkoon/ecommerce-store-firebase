// import Intro from "./Intro";
import Banner from "./Banner";
import About from "./About";
// import Gallery from "./Gallery";
// import Review from "./Review";
import Loader from "./Loader";
import Direct from "./Direct";
import Contact from "./Contact";
import Fruit from "./Fruit";

function Homepage() {
  return (
    <>
      {/* <Intro path="#banner" /> */}
      <Loader />
      <Banner />
      <About />
      <Fruit />
      <Direct />
      <Contact />
      {/* <Gallery /> */}
      {/* <Review /> */}
    </>
  );
}

export default Homepage;
