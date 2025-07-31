import MainNav from "../components/MainNav";
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: 'Agricultural Advisory',
      slug: 'agricultural-advisory',
      description:
        'We deliberately analyse the value chain of the investment to understand the gaps and provide smart solutions to improve the market system for investors and beneficiaries.',
      image: '/agricAdvisory.png'
    },
    {
      title: 'Agro‑Tourism',
      slug: 'agro-tourism',
      description:
        'Who says hospitality or recreation cannot thrive within a farming system environment? We bring all these together and create a lifetime experience for guests and operators. Nature has a way of balancing itself and we just have to fit into it — not the other way round.',
      image: 'agroTourism.png'
    },
    {
      title: 'Commodity Trading, Value Chain & Market Development',
      slug: 'commodity-trading',
      description:
        'We provide sustainable market driven solutions to institutional, local and international investors entering the Nigerian Agricultural Industry.',
      image: 'marketDevelopment.png'
    },
    {
      title: 'Training Provision',
      slug: 'training-provision',
      description:
        'We deliberately think out of the box to disrupt the system and create value to achieve systemic change in the market system through training and capacity building. We offer professional services in commodity exports, brokerage and supply for Nigerian cash crop, fruits and vegetables.',
      image: '/trainingProvision.png'
    },
    {
      title: 'Renewable Energy, Environmental & Waste Management',
      slug: 'renewable-energy-environmental-waste',
      description:
        'We offer renewable energy, environmental and waste management services.',
      image: '/renewableEnergy.png'
    }
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
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {s.description}
                    </p>
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
