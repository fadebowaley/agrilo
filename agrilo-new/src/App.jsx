import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import  './assets/css/all.min.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home';
import TeamMembers  from './pages/teamMembers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function Layout() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/teamMembers" element={<TeamMembers />} />
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
