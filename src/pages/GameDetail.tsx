import { useParams, Link, useNavigate } from 'react-router-dom';
import gamesData from '../data/games.json';
import { ArrowLeft, Shield, BarChart2, Zap, Play } from 'lucide-react';
import AnalysisResult from '../components/AnalysisResult';
import SlotSimulator from '../components/SlotSimulator';

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = gamesData.find(g => g.id === id);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Game not found</h1>
        <button 
          onClick={() => navigate('/games')}
          className="text-emerald-500 font-bold underline"
        >
          Back to Games
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        to="/games" 
        className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Library
      </Link>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-5xl font-black mb-2">{game.name}</h1>
            <p className="text-slate-500 text-xl">{game.provider}</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Official RTP</p>
              <p className="text-3xl font-black font-mono text-emerald-500">{game.rtp}%</p>
            </div>
            <div className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Volatility</p>
              <p className="text-3xl font-black font-mono text-amber-500">{game.volatility[0]}</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 leading-relaxed text-slate-300">
          <h2 className="text-xl font-bold text-white mb-4">Mathematical Breakdown</h2>
          <p className="mb-6">{game.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BarChart2 className="w-5 h-5 text-emerald-500" />
                <h3 className="font-bold">Winning Frequency</h3>
              </div>
              <p className="text-sm opacity-80">
                With {game.volatility.toLowerCase()} volatility, this game is designed for {game.volatility === 'High' ? 'large, infrequent' : 'small, frequent'} payouts. 
                Expect long "dry spells" where your balance may decrease significantly before a potential win occurs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-emerald-500" />
                <h3 className="font-bold">Simulation Insight</h3>
              </div>
              <p className="text-sm opacity-80">
                Over 10,000 spins, the mathematical reality of the {game.rtp}% RTP will likely result in a loss of {Math.round((100 - game.rtp) * 100) / 100}% of your total wager. 
                Our simulator below demonstrates this process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-emerald-500/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-950 px-6 text-xs font-black text-emerald-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <Play className="w-4 h-4 fill-emerald-500" /> Mathematical Simulator for {game.name}
            </span>
          </div>
        </div>

        <SlotSimulator initialRtp={game.rtp} />
      </div>
    </div>
  );
};

export default GameDetail;
