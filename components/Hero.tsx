import React from 'react';
import { Youtube, Car } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="scroll-mt-24 relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="./waymo_exterior.jpg" 
          alt="Waymo Exterior Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/60 lg:to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50/50 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Car size={14} />
              Mobility Innovator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              朱 成益 <span className="text-slate-400 font-light text-2xl sm:text-3xl block sm:inline">| Chaview</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 mt-4 block">
                自分のアイデアでモビリティを変えていきたい。
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-2xl leading-relaxed">
              米国でのWaymo体験が、私の視点を変えました。<br />
              YouTubeチャンネル<strong>「Chaview」</strong>運営で培った「顧客視点」と「企画力」で、 
              GOが描くモビリティと社会の未来を加速させます。
            </p>

            <div className="mb-10 bg-white/80 p-5 rounded-xl border border-purple-100 shadow-sm backdrop-blur-sm">
                 <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                   登録者2,000人を達成し、総再生回数600万回、視聴時間5万時間以上を満たして収益化に成功した。また自動車用品企業から広告協賛の提案を5件受け、そのうち1社とは高い評価を得て1年間の長期契約につながった。
                 </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 border-l-4 border-purple-500 pl-6 py-2 bg-purple-50/50 rounded-r-lg">
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Vision</p>
                <p className="text-lg font-bold text-slate-900">市場変革</p>
                <p className="text-sm text-slate-600">新しい移動体験の創出</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Experience</p>
                <p className="text-lg font-bold text-slate-900">Waymo / EV</p>
                <p className="text-sm text-slate-600">現地体験と深い分析</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Skill</p>
                <p className="text-lg font-bold text-slate-900">企画・推進力</p>
                <p className="text-sm text-slate-600">実績に基づく実行力</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.youtube.com/@chaview500" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
              >
                <Youtube className="mr-2 h-5 w-5 text-white" />
                Chaviewを見る
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="lg:col-span-5 hidden lg:flex justify-center lg:justify-end relative">
            {/* Main Image (Interior) */}
            <div className="relative w-80 h-64 sm:w-96 sm:h-72 bg-slate-200 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl border-[6px] border-white overflow-hidden group z-10">
               <img 
                 src="./waymo_interior.jpg" 
                 alt="Waymo Interior Experience" 
                 className="object-cover w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-700" 
               />
               <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-lg">Waymo Experience</p>
                  <p className="text-slate-200 text-sm">Interior / POV</p>
               </div>
            </div>
            
            {/* Floating Image (Exterior) - Top Right */}
            <div className="absolute -top-12 -right-8 w-48 h-32 bg-slate-200 rounded-xl -rotate-6 shadow-xl border-4 border-white overflow-hidden z-0 hidden xl:block opacity-90 hover:opacity-100 transition-opacity hover:z-20 hover:scale-105 duration-300">
                 <img 
                 src="./waymo_exterior.jpg" 
                 alt="Waymo Exterior" 
                 className="object-cover w-full h-full" 
               />
            </div>
            
            {/* Decorative background element behind photo */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-80 bg-blue-200/50 rounded-2xl rotate-12 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;