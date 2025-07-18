import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Slides from "../components/Slides";
import Welcome from "../components/Welcome";
import Banner from "../components/Banner";
import Team from "../components/Team";
import Project from "../components/Project";
import BlogSection from "../components/Blog";
import Footer from "../components/Footer";

// Parent container variant
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // controls delay between items
    },
  },
};

// Child item variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Home() {
  return (
    <>
      <Navigation />
      
      <Slides />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp}>
          <Welcome />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Banner />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Team />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Project />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <BlogSection />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
