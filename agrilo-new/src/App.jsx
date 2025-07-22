import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import  './assets/css/all.min.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home';
import About from './pages/About';
import Leadership  from './pages/Leadership';
import TeamMembers from './pages/TeamMembers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import TeamGrid from './components/TeamGrid';
// import RobertProfile from './components/RobertProfile';
import TeamProfile from './components/TeamProfile';
function Layout() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamMembers />} />
        <Route path="/" element={<TeamGrid />} />
        <Route path="/team/:name" element={<TeamProfile />} />
        
        {/* <Route path="/team/robert-smith" element={<RobertProfile />} /> */}
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
