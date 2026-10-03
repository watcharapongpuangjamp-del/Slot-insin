import { GraduationCap, BookOpen, Brain, TrendingUp, Target, ShieldCheck } from 'lucide-react';

const Learn = () => {
  const concepts = [
    {
      title: "RTP (Return to Player)",
      desc: "RTP is the theoretical percentage of all wagered money that a slot game will pay back to players over time. For example, a 96% RTP means for every $100 wagered, the game is programmed to return $96 as wins eventually.",
      icon: TrendingUp,
      color: "text-emerald-500"
    },
    {
      title: "Volatility / Variance",
      desc: "This describes the frequency and size of payouts. High Volatility games pay out large wins but less often. Low Volatility games pay out smaller wins frequently.",
      icon: Target,
      color: "text-amber-500"
    },
    {
      title: "House Edge",
      desc: "The opposite of RTP. If a game has 96% RTP, the House Edge is 4%. This is the guaranteed mathematical profit the casino makes over the long run.",
      icon: ShieldCheck,
      color: "text-rose-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <GraduationCap className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h1 className="text-5xl font-black mb-6">Slot <span className="text-emerald-500">Academy</span></h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Knowledge is the only way to play responsibly. Learn the mathematical truths 
          behind the flashing lights and sounds of modern slot machines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {concepts.map((concept, i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
            <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 ${concept.color}`}>
              <concept.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{concept.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{concept.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl font-bold">The Gambler's Fallacy</h2>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 leading-relaxed text-slate-300">
              <p className="mb-4">
                Many players believe that if a machine hasn't paid out in a while, it's "due" for a win. 
                <span className="text-emerald-500 font-bold"> This is a dangerous myth.</span>
              </p>
              <p>
                Every single spin in a modern slot machine is an 
                <span className="italic"> independent event</span>. The Random Number Generator (RNG) doesn't remember 
                what happened on the previous spin. Your chances of winning on the next spin are exactly the same, 
                regardless of whether you just won a jackpot or lost 100 times in a row.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl font-bold">How RNG Works</h2>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 leading-relaxed text-slate-300">
              <p className="mb-4">
                Modern slots use PRNGs (Pseudo-Random Number Generators). These are algorithms that 
                generate thousands of numbers per second. When you hit the "Spin" button, the algorithm 
                stops at a specific number which determines the final position of the reels.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The outcome is decided the exact millisecond you click.</li>
                <li>Animations (the spinning reels) are just for entertainment.</li>
                <li>Stop buttons do not affect the outcome.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Learn;
