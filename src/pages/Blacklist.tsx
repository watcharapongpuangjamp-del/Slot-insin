import { AlertTriangle, ShieldAlert, ExternalLink, Info } from 'lucide-react';
import casinosData from '../data/casinos.json';

const Blacklist = () => {
  const blacklisted = casinosData.filter(c => c.status === 'Blacklisted' || c.status === 'Warning');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
            <ShieldAlert className="w-8 h-8 text-rose-500" />
          </div>
          <div>
            <h1 className="text-4xl font-black">Casino <span className="text-rose-500">Blacklist</span></h1>
            <p className="text-slate-400">High-risk domains flagged for suspicious activity, non-payment, or unfair practices.</p>
          </div>
        </div>

        <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6 flex items-start gap-4">
          <Info className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
          <div className="text-sm text-slate-300 leading-relaxed">
            <p className="font-bold text-rose-400 mb-2">Important Notice</p>
            This list is compiled based on user reports, independent audits, and industry watchdogs. 
            Being on this list means the domain has failed one or more critical trust tests. 
            We strongly advise against sharing any personal or financial information with these sites.
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {blacklisted.map((casino, i) => (
          <div 
            key={i} 
            className={`p-6 rounded-2xl border-2 transition-all hover:bg-slate-900/50 ${casino.status === 'Blacklisted' ? 'border-rose-500/20 bg-rose-500/5' : 'border-amber-500/20 bg-amber-500/5'}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${casino.status === 'Blacklisted' ? 'bg-rose-500 text-white' : 'bg-amber-500 text-black'}`}>
                    {casino.status}
                  </span>
                  <h3 className="text-xl font-bold">{casino.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
                  <ExternalLink className="w-3 h-3" />
                  {casino.domain}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                  {casino.reason}
                </p>
              </div>
              
              <div className="text-center md:text-right shrink-0">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Trust Score</p>
                <p className={`text-3xl font-black font-mono ${casino.status === 'Blacklisted' ? 'text-rose-500' : 'text-amber-500'}`}>
                  {casino.trustScore}/100
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-slate-500 text-sm italic">
          Do you have a domain to report? Contact our analysis team at report@slotinsight.edu
        </p>
      </div>
    </div>
  );
};

export default Blacklist;
