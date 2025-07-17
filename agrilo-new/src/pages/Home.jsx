import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import Banner from "../components/Banner";
import Team from "../components/Team";
import Project from "../components/Project";
import BlogSection from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
        <Navigation />
        <Welcome />
        <Banner />
        <Team />
        <Project />
        <BlogSection />
        <Footer /> 
    </>
  );
}

export default Home;