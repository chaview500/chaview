import React from 'react';
import { User, Rocket, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
          <User className="text-purple-600" />
          About Me
        </h2>
        
        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
                「いつか自分の手で、既存市場のルールを変えたい」
            </h3>
            
            <div className="text-left space-y-6 text-lg leading-relaxed text-slate-700">
                <p>
                    以前から新しい技術やサービスに関心があり、特にモビリティ業界の動向を追ってきました。
                    海外でRide Shareが普及する一方で、日本では規制により革新が遅れている現状に「もどかしさ」を感じていました。
                </p>

                <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
                    <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                        <Rocket size={20} />
                        転機となった、米国でのWaymo体験
                    </h4>
                    <p className="text-base text-slate-600">
                        大学3年の夏、米国留学中に<strong>Waymoの自動運転タクシー</strong>に実際に乗車しました。
                        そこで体験した「移動の未来」の完成度に衝撃を受け、<span className="font-bold text-slate-900 bg-yellow-100 px-1">「自分が進むべき道はここだ」</span>と確信しました。
                    </p>
                </div>

                <p>
                    その後、GO株式会社がWaymoとパートナーシップを結んだことを知り、ここしかないと強く感じました。
                    私は「新しいアイデアで既存の仕組みを改善すること」に最もやりがいを感じます。
                    GOのような社会的インパクトの大きい課題に対し、スタートアップ的なスピード感で挑める環境で、私の強みを発揮したいです。
                </p>
            </div>
            
            <div className="mt-8 flex justify-center gap-6 text-slate-500 text-sm border-t border-slate-200 pt-6">
                <div className="flex items-center gap-1">
                    <Zap size={16} />
                    <span>Mobility Tech Enthusiast</span>
                </div>
                <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>Hosei Univ. International Politics</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;