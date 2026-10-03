import { useState } from 'react';
import { Search, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import AnalysisResult from '../components/AnalysisResult';
import SlotSimulator from '../components/SlotSimulator';
import casinosData from '../data/casinos.json';
import gamesData from '../data/games.json';

const TrustChecker = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [error, setError] = useState('');

  const handleRun = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
      const domain = urlObj.hostname;
      const gameSlug = urlObj.pathname.split('/').filter(Boolean).pop() || '';

      setIsAnalyzing(true);
      setAnalysisData(null);

      // Simulate analysis delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const casinoInfo = casinosData.find(c => domain.includes(c.domain));
      const gameInfo = gamesData.find(g => gameSlug.toLowerCase().includes(g.id) || g.id.includes(gameSlug.toLowerCase()));

      setAnalysisData({
        domain,
        gameSlug,
        casinoInfo,
        gameInfo
      });

    } catch (err) {
      setError('Invalid URL format. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-black mb-4">Domain & Game <span className="text-emerald-500">Analyzer</span></h1>
        <p className="text-slate-400">
          Paste the URL of the game or casino you want to analyze. Our system will scan its metadata and provide mathematical insights.
        </p>
      </div>

      {/* Input Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <form onSubmit={handleRun} className="relative group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="w-6 h-6 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="https://casino-site.com/games/sweet-bonanza"
            className={`w-full pl-16 pr-32 py-6 bg-slate-900 border-2 rounded-2xl text-xl focus:outline-none transition-all ${error ? 'border-rose-500/50' : 'border-emerald-500/10 focus:border-emerald-500/50 shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)]'}`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isAnalyzing}
          />
          <button
            type="submit"
            disabled={isAnalyzing}
            className="absolute right-3 inset-y-3 px-8 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl font-black tracking-widest transition-all flex items-center gap-2"
          >
            {isAnalyzing ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>RUN <ArrowRight className="w-5 h-5" /></>
            )}
          </button>
        </form>
        {error && (
          <div className="mt-4 flex items-center gap-2 text-rose-400 text-sm font-medium animate-in fade-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}
      </div>

      {/* Loading Steps */}
      {isAnalyzing && (
        <div className="max-w-4xl mx-auto space-y-4 animate-in fade-in duration-300">
          {[
            "Extracting domain metadata...",
            "Checking reputation database...",
            "Calculating mathematical RTP profile...",
            "Preparing simulation environment..."
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-500">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
              <span className="text-sm font-mono">{step}</span>
            </div>
          ))}
        </div>
      )}

      {/* Results Section */}
      {analysisData && (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <AnalysisResult data={analysisData} />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-emerald-500/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-slate-950 px-6 text-xs font-black text-emerald-500 uppercase tracking-[0.2em]">
                Live Mathematical Simulator
              </span>
            </div>
          </div>

          <SlotSimulator initialRtp={analysisData.gameInfo?.rtp || 96} />
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 text-center">
            <p className="text-slate-400 text-sm italic">
              "The results above are generated using standard probability models. While they simulate the mechanics of the game, 
              real-world results may vary depending on the platform's specific implementation."
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrustChecker;
