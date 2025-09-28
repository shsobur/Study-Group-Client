// File path__
import About from "../About/About";
import Banner from "../Banner/Banner";
import Benefit from "../Benefit/Benefit";
import NewsLetter from "../NewsLetter/NewsLetter";
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";

const HomePageLayout = () => {
  return (
    <>
      <section>
        <ScrollToTop></ScrollToTop>
        <Banner></Banner>
        <About></About>
        <Benefit></Benefit>
        <NewsLetter></NewsLetter>
      </section>
    </>
  );
};

export default HomePageLayout;