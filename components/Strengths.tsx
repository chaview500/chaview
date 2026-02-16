import React from 'react';
import { Target, Users, Search } from 'lucide-react';

const Strengths: React.FC = () => {
  const strengths = [
    {
      id: 1,
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "自ら動いて企画し、形にする推進力",
      description: "YouTubeで自動車レビューを継続。ゼロから企画を立て、撮影・編集・改善まで自走して積み上げてきました。"
    },
    {
      id: 2,
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "相手目線での調整・交渉力",
      description: "広告協賛案件では、クライアントの要望を満たしつつ、視聴者の離脱を防ぐ構成を提案。双方の納得点を見つけ、成果（長期契約）につなげました。"
    },
    {
      id: 3,
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "課題を見つけ、細部まで改善する力",
      description: "「ユーザーとして感じる違和感」を見逃さず、具体的な改善策に落とし込むことが得意です。データと定性の両面からアプローチします。"
    }
  ];

  return (
    <section id="strengths" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Strengths</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            私の3つの特徴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength) => (
            <div key={strength.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                {strength.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 text-center md:text-left">
                {strength.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-center md:text-left flex-grow">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;