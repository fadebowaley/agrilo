import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import MainNav from '../components/MainNav';

const serviceData = {
  'advisory-services': {
    title: 'Advisory Services',
    image: '/images/services/advisory.jpg',
    content: 'Detailed information about advisory services...',
  },
  'market-entry': {
    title: 'Market Entry Strategy',
    image: '/images/services/market-entry.jpg',
    content: 'In-depth insights into market entry strategies...',
  },
  'stakeholder-engagement': {
    title: 'Stakeholder Engagement',
    image: '/images/services/stakeholders.jpg',
    content: 'Engaging local and international stakeholders effectively...',
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) return <div className="p-10 text-center">Service not found</div>;

  return (
    <>
      <MainNav />
      <Hero title={service.title} bgImage={service.image} />
      <section className="py-10 px-6 max-w-4xl mx-auto text-gray-700 leading-relaxed">
        <p>{service.content}</p>
      </section>
    </>
  );
};

export default ServiceDetail;
