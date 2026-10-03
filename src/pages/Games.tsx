import { Link } from 'react-router-dom';
import gamesData from '../data/games.json';
import { Database, TrendingUp, Info, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = gamesData.filter(game => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black mb-4">Verified <span className="text-emerald-500">Games</span></h1>
          <p className="text-slate-400 max-w-xl">
            Explore our database of verified slot games. We analyze providers and official RTP values to give you the facts.
          </p>
        </div>
        
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search games or providers..."
            className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <Link 
            key={game.id} 
            to={`/games/${game.id}`}
            className="group block p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{game.name}</h3>
                <p className="text-slate-500 text-sm">{game.provider}</p>
              </div>
              <div className="px-3 py-1 rounded bg-slate-950 text-xs font-mono text-emerald-500 border border-emerald-500/10">
                {game.rtp}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-slate-950/50">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Volatility</p>
                <p className="font-bold text-sm">{game.volatility}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/50">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Category</p>
                <p className="font-bold text-sm">Video Slot</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-500 transition-colors">
              <span>View Analysis</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-slate-800 border-dashed">
          <Database className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <p className="text-slate-500 font-bold">No games found matching your search.</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-4 text-emerald-500 text-sm font-bold underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Games;
