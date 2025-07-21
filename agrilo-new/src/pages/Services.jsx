import MainNav from "../components/MainNav";
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function Services() {
    const services = [
        {
            title: 'Advisory Services',
            slug: 'advisory-services',
            description:
                'We offer expert agribusiness advice, from strategy to execution, ensuring sustainable growth and scalability.',
            image: '/images/services/advisory.jpg',
        },
        {
            title: 'Market Entry Strategy',
            slug: 'market-entry',
            description:
                'Helping you understand the Nigerian agribusiness landscape and create a strong market entry plan.',
            image: '/images/services/market-entry.jpg',
        },
        {
            title: 'Stakeholder Engagement',
            slug: 'stakeholder-engagement',
            description:
                'We facilitate meaningful connections between stakeholders, investors, government, and local communities.',
            image: '/images/services/stakeholders.jpg',
        },
        {
            title: 'Stakeholder Engagement',
            slug: 'stakeholder-engagement',
            description:
                'We facilitate meaningful connections between stakeholders, investors, government, and local communities.',
            image: '/images/services/stakeholders.jpg',
        },
        {
            title: 'Stakeholder Engagement',
            slug: 'stakeholder-engagement',
            description:
                'We facilitate meaningful connections between stakeholders, investors, government, and local communities.',
            image: '/images/services/stakeholders.jpg',
        },
        {
            title: 'Stakeholder Engagement',
            slug: 'stakeholder-engagement',
            description:
                'We facilitate meaningful connections between stakeholders, investors, government, and local communities.',
            image: '/images/services/stakeholders.jpg',
        },
    ];

    return (
        <>
            <MainNav />
            <Hero title="Our Services" bgImage="/images/hero/blog.jpg" />

            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-green-700 mb-12 text-center uppercase"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Agribusiness Services
                    </motion.h2>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <Link
                                    to={`/services/${s.slug}`}
                                    className="group block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
                                >
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        className="w-full h-52 object-cover transition-transform group-hover:scale-105 duration-300"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition">
                                            {s.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        <Footer />
        </>
    );
}

export default Services;
