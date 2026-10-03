import { Link } from 'react-router-dom';
import { ShieldCheck, Database, Info, AlertTriangle, Play, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Analyze', path: '/trust-checker', icon: Search },
    { name: 'Games', path: '/games', icon: Database },
    { name: 'Simulator', path: '/simulator', icon: Play },
    { name: 'Blacklist', path: '/blacklist', icon: AlertTriangle },
    { name: 'Learn', path: '/learn', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/10 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-emerald-500/50 transition-all">
            <ShieldCheck className="w-5 h-5 text-slate-950" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100">
            Slot<span className="text-emerald-500">Insight</span> Hub
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/about"
            className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded transition-colors whitespace-nowrap"
          >
            About Hub
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-emerald-500/10 py-4 animate-in fade-in slide-in-from-top-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 py-2 transition-colors"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center py-3 bg-emerald-600 text-white rounded font-bold"
            >
              About Hub
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
