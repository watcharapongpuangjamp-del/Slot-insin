import { Info, Mail, Github, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center border border-emerald-500/20 mx-auto mb-8">
            <Info className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-5xl font-black mb-6">Our <span className="text-emerald-500">Mission</span></h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We are a group of developers and mathematicians dedicated to transparency in the digital gaming industry.
          </p>
        </div>

        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">Why we built Slot Insight Hub</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              The online gambling industry is worth billions, yet the average player knows very little about how the games actually work. 
              Misinformation and "get-rich-quick" schemes lead many to financial ruin. 
              We believe that by providing free, high-fidelity analysis tools, we can help people understand the mathematical reality of gambling.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Educational Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "No Gambling", desc: "We never offer real-money wagering or affiliate links to casinos." },
                { title: "Open Source Math", desc: "Our simulation logic is based on verified industry standards." },
                { title: "Privacy First", desc: "We don't track your analysis history or personal data." },
                { title: "Pure Data", desc: "Our trust scores are based on objective metrics and user reports." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                  <h3 className="text-emerald-500 font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Support our Research</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Slot Insight Hub is a non-profit educational project. Help us keep the servers running and the data updated.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-rose-600/20">
                <Heart className="w-5 h-5 fill-white" /> Sponsor
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-8 text-slate-500">
            <a href="mailto:contact@slotinsight.edu" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail className="w-4 h-4" /> contact@slotinsight.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
