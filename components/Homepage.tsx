import Banner from "./Banner";
import About from "./About";
import DirectReview from "./DirectReview";
import Contact from "./Contact";
import Fruit from "./Fruit";
import DirectGallery from "./DirectGallery";

function Homepage() {
  return (
    <>
      <Banner />
      <About />
      <Fruit />
      <DirectGallery />
      <DirectReview />
      <Contact />
    </>
  );
}

export default Homepage;
