import { useState, useEffect } from 'react';
import { spin, SpinResult } from '../utils/slotEngine';
import { Play, RotateCcw, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SlotSimulatorProps {
  initialRtp?: number;
}

const SlotSimulator = ({ initialRtp = 96 }: SlotSimulatorProps) => {
  const [rtp, setRtp] = useState(initialRtp);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [history, setHistory] = useState<{ name: number; balance: number }[]>([
    { name: 0, balance: 1000 }
  ]);
  const [lastResult, setLastResult] = useState<SpinResult | null>(null);
  const [stats, setStats] = useState({
    spins: 0,
    wins: 0,
    losses: 0,
    totalWagered: 0,
    totalWon: 0
  });
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (balance < bet) return;
    
    setIsSpinning(true);
    
    // Simulate delay for effect
    setTimeout(() => {
      const result = spin(rtp, bet);
      const newBalance = balance - bet + result.win;
      
      setBalance(newBalance);
      setLastResult(result);
      setStats(prev => ({
        spins: prev.spins + 1,
        wins: result.win > 0 ? prev.wins + 1 : prev.wins,
        losses: result.win === 0 ? prev.losses + 1 : prev.losses,
        totalWagered: prev.totalWagered + bet,
        totalWon: prev.totalWon + result.win
      }));
      
      setHistory(prev => [
        ...prev,
        { name: prev.length, balance: Math.round(newBalance * 100) / 100 }
      ].slice(-20)); // Keep last 20 for the graph
      
      setIsSpinning(false);
    }, 500);
  };

  const handleReset = () => {
    setBalance(1000);
    setHistory([{ name: 0, balance: 1000 }]);
    setLastResult(null);
    setStats({ spins: 0, wins: 0, losses: 0, totalWagered: 0, totalWon: 0 });
  };

  const profit = balance - 1000;

  return (
    <div className="bg-slate-900 border border-emerald-500/10 rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-emerald-500/10 flex items-center justify-between bg-emerald-500/5">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Play className="w-5 h-5 text-emerald-500 fill-emerald-500" />
          Educational Simulator
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Balance</p>
            <p className="text-xl font-mono text-emerald-400 font-bold tabular-nums">
              {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
          </div>
          <button 
            onClick={handleReset}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-8">
        {/* Reels */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`w-24 h-32 md:w-32 md:h-40 rounded-xl bg-slate-950 border-2 border-emerald-500/20 flex items-center justify-center text-5xl md:text-6xl shadow-inner transition-all duration-300 ${isSpinning ? 'animate-pulse scale-95 blur-[2px]' : 'scale-100'}`}
            >
              {lastResult ? lastResult.reels[i] : '?'}
            </div>
          ))}
        </div>

        {/* Win Message */}
        <div className="h-12 flex items-center justify-center mb-8">
          {lastResult && lastResult.win > 0 && !isSpinning && (
            <div className="bg-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full border border-emerald-500/30 animate-bounce font-bold">
              WIN +{lastResult.win.toFixed(2)} (x{lastResult.multiplier})
            </div>
          )}
          {lastResult && lastResult.win === 0 && !isSpinning && (
            <div className="text-slate-500 font-medium">Try again...</div>
          )}
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-400">Target RTP</label>
                <span className="text-sm font-bold text-emerald-500">{rtp}%</span>
              </div>
              <input 
                type="range" 
                min="80" 
                max="99" 
                value={rtp}
                onChange={(e) => setRtp(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-400">Bet per spin</label>
                <span className="text-sm font-bold text-emerald-500">{bet}</span>
              </div>
              <div className="flex gap-2">
                {[1, 5, 10, 50].map(v => (
                  <button 
                    key={v}
                    onClick={() => setBet(v)}
                    className={`flex-1 py-2 rounded text-xs font-bold transition-all ${bet === v ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button 
              onClick={handleSpin}
              disabled={isSpinning || balance < bet}
              className="w-full py-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-black text-xl tracking-widest shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              {isSpinning ? 'SPINNING...' : 'SPIN 🎲'}
            </button>
          </div>
        </div>

        {/* Graph & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950/50 p-4 rounded-xl border border-emerald-500/5">
            <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">Balance History (Last 20)</h4>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={history}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="name" hide />
                  <YAxis hide domain={['auto', 'auto']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#10b981', color: '#fff' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="balance" 
                    stroke="#10b981" 
                    strokeWidth={3} 
                    dot={{ fill: '#10b981', r: 4 }} 
                    activeDot={{ r: 6, fill: '#fff' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-950/50 p-4 rounded-xl border border-emerald-500/5">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Total Spins</p>
              <p className="text-xl font-mono font-bold">{stats.spins}</p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-emerald-500/5">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Profit/Loss</p>
              <p className={`text-xl font-mono font-bold flex items-center gap-2 ${profit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {profit >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {profit.toFixed(2)}
              </p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-emerald-500/5">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Win Rate</p>
              <p className="text-xl font-mono font-bold">
                {stats.spins > 0 ? ((stats.wins / stats.spins) * 100).toFixed(1) : 0}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotSimulator;
