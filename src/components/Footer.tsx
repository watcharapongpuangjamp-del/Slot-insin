const Footer = () => {
  return (
    <footer className="border-t border-emerald-500/10 bg-slate-950 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <p className="text-2xl font-bold text-slate-100">
            Slot<span className="text-emerald-500">Insight</span> Hub
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-8 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
          <p className="text-xs text-emerald-400 font-medium uppercase tracking-widest mb-2">Disclaimer / คำเตือน</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            เว็บไซต์นี้จัดทำขึ้นเพื่อวัตถุประสงค์ทางการศึกษาและวิเคราะห์สถิติเท่านั้น 
            เราไม่มีความเกี่ยวข้องกับเว็บพนัน และไม่สนับสนุนการเล่นพนันทุกรูปแบบ 
            ข้อมูลที่แสดงเป็นการจำลองทางคณิตศาสตร์เพื่อความเข้าใจในกลไกของเกมเท่านั้น
          </p>
          <p className="mt-2 text-slate-500 text-[10px]">
            This website is for educational and statistical purposes only. We do not support gambling.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Slot Insight Hub</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
