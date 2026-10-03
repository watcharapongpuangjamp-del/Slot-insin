import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, BarChart3, GraduationCap, ChevronRight, Play } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-8 animate-in fade-in slide-in-from-top-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            EDUCATIONAL PLATFORM ONLY
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 max-w-4xl mx-auto">
            Demystifying Slot Mechanics Through <span className="text-emerald-500">Science</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Analyze game RTP, verify casino credibility, and run high-fidelity mathematical simulations without risking a single penny.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/trust-checker" 
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-[0_20px_40px_-15px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Start Analysis <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/learn" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Trust Verification",
              desc: "Compare casino domains against our verified blacklist and industry reputation database.",
              icon: ShieldCheck,
              color: "text-emerald-500"
            },
            {
              title: "RTP Simulation",
              desc: "Run thousands of virtual spins to see how House Edge and Volatility affect balances over time.",
              icon: Zap,
              color: "text-amber-500"
            },
            {
              title: "Data Insights",
              desc: "Visualize performance data with real-time charting and statistical breakdown.",
              icon: BarChart3,
              color: "text-blue-500"
            }
          ].map((f, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className={`w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:scale-110 transition-transform ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simulator Preview */}
      <section className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-900 p-1">
          <div className="rounded-[22px] bg-slate-950 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">The Science of RNG</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Most players don't understand that slot games are purely mathematical. 
                Our simulator uses standard random number generation (RNG) logic to show you 
                why the "house always wins" in the long run.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-slate-300">Transparent mathematical models</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-slate-300">Real-time RTP adjustment visualization</span>
                </li>
              </ul>
              <Link 
                to="/simulator" 
                className="inline-flex items-center gap-2 text-emerald-500 font-bold hover:gap-4 transition-all"
              >
                Try the Simulator <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 w-full max-w-md bg-slate-900 rounded-2xl border border-emerald-500/20 p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-full aspect-video rounded-lg bg-slate-950 mb-6 flex items-center justify-center text-4xl gap-2">
                  <span>💎</span>
                  <span className="animate-pulse">7️⃣</span>
                  <span>💎</span>
                </div>
                <div className="w-full space-y-3">
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div className="h-full w-2/3 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                    <span>Balance Tracking</span>
                    <span className="text-emerald-500">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <GraduationCap className="w-16 h-16 text-emerald-500 mx-auto" />
          <h2 className="text-3xl font-bold">Ready to learn the truth?</h2>
          <p className="text-slate-400">
            Knowledge is your best defense. Use our tools to understand 
            the odds before you ever step foot into a virtual casino.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/trust-checker" className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-bold">Get Started</Link>
            <Link to="/about" className="px-6 py-3 bg-slate-800 text-white rounded-lg font-bold">Our Mission</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
