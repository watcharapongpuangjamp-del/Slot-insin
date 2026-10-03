import SlotSimulator from '../components/SlotSimulator';
import { Info, Play } from 'lucide-react';

const Simulator = () => {
  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <Play className="w-8 h-8 text-emerald-500 fill-emerald-500" />
          </div>
          <div>
            <h1 className="text-4xl font-black">Full <span className="text-emerald-500">Simulator</span></h1>
            <p className="text-slate-400">Pure mathematical playground. No URL required. Adjust RTP and see the results.</p>
          </div>
        </div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 flex items-start gap-4">
          <Info className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
          <div className="text-sm text-slate-300 leading-relaxed">
            <p className="font-bold text-emerald-400 mb-2">How to use this tool</p>
            Use this simulator to understand how different RTP (Return to Player) settings affect your balance over time. 
            Try setting a low RTP (e.g., 85%) and run 50 spins, then reset and try a high RTP (98%). 
            Note how the "volatility" of individual spins still makes winning a matter of luck in the short term, 
            while the math always wins in the long term.
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <SlotSimulator initialRtp={96} />
      </div>
    </div>
  );
};

export default Simulator;
