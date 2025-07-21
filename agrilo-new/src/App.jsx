import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  './assets/css/all.min.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import TeamMembers  from './pages/teamMembers';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import WhatWeOffer from './pages/What-we-Offer';
import Blog from './pages/Blog'
import Investments from './pages/Investments';
import BookConsulation from './pages/Book-Consultation'
import ScrollToTop from './components/ScrollToTop';

function Layout() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teamMembers" element={<TeamMembers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/services/investments" element={<Investments />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/book-consultation" element={<BookConsulation />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
