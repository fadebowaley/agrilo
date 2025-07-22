import MainNav from "../components/MainNav";
import { LineChart, BarChartBig } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Investments() {
    return(
        <>
        <MainNav />
        <Hero title="Investments" bgImage="/images/hero/blog.jpg" />
        <section className="py-15 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                className="text-4xl font-bold text-green-700 mb-6 text-center"
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }}
                >
                Agribusiness Investments
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                >
                    <h3 className="text-2xl font-semibold">Opportunities in Nigerian Agribusiness</h3>
                    <p className="text-gray-600">
                    We guide local and international investors on high-value investment opportunities across the agricultural value chain.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                    <li>Livestock, Poultry & Aquaculture</li>
                    <li>Processing & Agro-Tech</li>
                    <li>Export-Oriented Farming</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-center"
                >
                    <BarChartBig className="w-32 h-32 text-green-600" />
                </motion.div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Investments;