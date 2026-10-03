import { CheckCircle2, AlertTriangle, XCircle, HelpCircle, ExternalLink, Shield } from 'lucide-react';

interface AnalysisResultProps {
  data: {
    domain: string;
    gameSlug: string;
    casinoInfo?: {
      name: string;
      trustScore: number;
      status: string;
      reason: string;
    };
    gameInfo?: {
      name: string;
      provider: string;
      rtp: number;
      volatility: string;
    };
  };
}

const AnalysisResult = ({ data }: AnalysisResultProps) => {
  const { casinoInfo, gameInfo, domain } = data;

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'safe': return 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5';
      case 'warning': return 'text-amber-400 border-amber-500/20 bg-amber-500/5';
      case 'blacklisted': return 'text-rose-400 border-rose-500/20 bg-rose-500/5';
      default: return 'text-slate-400 border-slate-500/20 bg-slate-500/5';
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'safe': return <CheckCircle2 className="w-6 h-6" />;
      case 'warning': return <AlertTriangle className="w-6 h-6" />;
      case 'blacklisted': return <XCircle className="w-6 h-6" />;
      default: return <HelpCircle className="w-6 h-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Casino Trust Analysis */}
      <div className={`p-6 rounded-2xl border-2 ${getStatusColor(casinoInfo?.status)}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {getStatusIcon(casinoInfo?.status)}
            <h3 className="text-xl font-bold">Casino Analysis</h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-slate-950/50 px-2 py-1 rounded">
            <ExternalLink className="w-3 h-3" />
            {domain}
          </div>
        </div>

        {casinoInfo ? (
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mb-1">Establishment</p>
              <p className="text-lg font-bold">{casinoInfo.name}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-grow">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold uppercase opacity-60">Trust Score</span>
                  <span className="text-xs font-black">{casinoInfo.trustScore}/100</span>
                </div>
                <div className="h-2 w-full bg-slate-950/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${casinoInfo.trustScore > 70 ? 'bg-emerald-500' : casinoInfo.trustScore > 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                    style={{ width: `${casinoInfo.trustScore}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/50 text-sm leading-relaxed">
              <span className="font-bold mr-2">Status: {casinoInfo.status}</span>
              {casinoInfo.reason}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center opacity-60">
            <HelpCircle className="w-12 h-12 mb-4" />
            <p className="font-bold">Domain Unlisted</p>
            <p className="text-sm">We don't have historical data for this specific domain yet.</p>
          </div>
        )}
      </div>

      {/* Game Mechanics Analysis */}
      <div className="p-6 rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6" />
          <h3 className="text-xl font-bold">Game Insight</h3>
        </div>

        {gameInfo ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/50 p-4 rounded-xl">
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mb-1">RTP (Return to Player)</p>
                <p className="text-2xl font-mono font-black">{gameInfo.rtp}%</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl">
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mb-1">Volatility</p>
                <p className="text-2xl font-bold">{gameInfo.volatility}</p>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mb-1">Game Identity</p>
              <p className="text-lg font-bold">{gameInfo.name}</p>
              <p className="text-sm opacity-80">{gameInfo.provider}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/50 text-sm leading-relaxed text-slate-300">
              This game uses <span className="text-emerald-400 font-bold">{gameInfo.volatility}</span> variance. 
              With an RTP of <span className="text-emerald-400 font-bold">{gameInfo.rtp}%</span>, 
              it is mathematically designed to return {gameInfo.rtp} units for every 100 units wagered over a very long period (millions of spins).
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/50 p-4 rounded-xl">
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mb-1">Estimated RTP</p>
                <p className="text-2xl font-mono font-black">96.0%</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl">
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mb-1">Volatility</p>
                <p className="text-2xl font-bold">Unknown</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
              <p className="font-bold mb-1 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Generic Analysis
              </p>
              We couldn't identify this specific game. Using industry average baseline (96% RTP) for simulation.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisResult;
