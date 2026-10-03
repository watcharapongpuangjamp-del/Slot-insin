import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import TrustChecker from './pages/TrustChecker';
import Blacklist from './pages/Blacklist';
import Learn from './pages/Learn';
import About from './pages/About';
import GameDetail from './pages/GameDetail';
import Simulator from './pages/Simulator';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/trust-checker" element={<TrustChecker />} />
            <Route path="/blacklist" element={<Blacklist />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/about" element={<About />} />
            <Route path="/simulator" element={<Simulator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
