import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  './assets/css/all.min.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Leadership  from './pages/Leadership';
import TeamMembers from './pages/TeamMembers';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import WhatWeOffer from './pages/What-we-Offer';
import Blog from './pages/Blog'
import Investments from './pages/Investments';
import BookConsulation from './pages/Book-Consultation'
import ScrollToTop from './components/ScrollToTop';
import TeamGrid from './components/TeamGrid';
// import RobertProfile from './components/RobertProfile';
import TeamProfile from './components/TeamProfile';
// import BlogDetails from "./pages/BlogDetails";
function Layout() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamMembers />} />
        <Route path="/team-grid" element={<TeamGrid />} />
        <Route path="/team/:name" element={<TeamProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teamMembers" element={<TeamMembers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/services/investments" element={<Investments />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/book-consultation" element={<BookConsulation />} />
          {/* <Route path="/blogs/:slug" element={<BlogDetails />} /> */}
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
