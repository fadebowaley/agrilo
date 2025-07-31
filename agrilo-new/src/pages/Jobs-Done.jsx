import MainNav from "../components/MainNav";
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList'; // <-- use the correct path

function JobsDone() {
    return (
        <>
            <MainNav />
            <Hero title="Our Jobs Done" bgImage="/images/hero/blog.jpg" />

            <motion.section
                className="py-16 px-6 bg-gray-50"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-6xl mx-auto">
                    <ProjectList />
                </div>
            </motion.section>

            <Footer />
        </>
    );
}

export default JobsDone;
