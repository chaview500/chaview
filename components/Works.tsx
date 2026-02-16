import React from 'react';
import { ExternalLink, Car, Play, Briefcase, Globe, Users, TrendingUp } from 'lucide-react';

const YouTubeEmbed = ({ id, title }: { id: string, title: string }) => {
  return (
    <a 
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block aspect-video bg-slate-200 relative overflow-hidden group"
      aria-label={`Watch ${title} on YouTube`}
    >
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          // Fallback to high quality if maxres is unavailable
          e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
          <Play className="text-purple-600 ml-1 fill-purple-600" size={28} />
        </div>
      </div>
    </a>
  );
};

const Works: React.FC = () => {
  return (
    <section id="works" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Works</h2>
          <p className="text-slate-600">
            モビリティへの情熱と、データに基づく改善の軌跡
          </p>
        </div>

        {/* YouTube Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2 border-b border-slate-200 pb-2">
            <Car className="text-red-600" />
            <span className="text-red-600 font-extrabold">Chaview</span> 
            <span className="text-slate-500 text-lg font-normal ml-2">- Mobility YouTube Channel</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Video 1: Waymo Review */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <YouTubeEmbed id="3n-a748vaVE" title="Waymo Review" />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-bold text-lg mb-2 line-clamp-2">米国Waymo 自動運転タクシー体験</h4>
                <ul className="text-sm text-slate-600 space-y-2 mb-4 flex-grow">
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">内容:</span> サンフランシスコでの実車レビュー</li>
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">視点:</span> アプリUXと自動運転の挙動分析</li>
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">発見:</span> 「未来の移動」の完成度と課題</li>
                </ul>
                <a href="https://youtu.be/3n-a748vaVE?si=NSQrnabgMWrWKV_Y" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium text-sm flex items-center gap-1 hover:underline mt-auto">
                  YouTubeで見る <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Video 2: Collab */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <YouTubeEmbed id="6owFhA4JAec" title="Car Product Collaboration" />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-bold text-lg mb-2 line-clamp-2">【企業案件】カー用品 徹底レビュー</h4>
                <ul className="text-sm text-slate-600 space-y-2 mb-4 flex-grow">
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">課題:</span> 商品認知拡大とメリットの訴求</li>
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">工夫:</span> 実際の使用シーンを想定した検証</li>
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">成果:</span> クライアント満足と視聴維持の両立</li>
                </ul>
                <a href="https://youtu.be/6owFhA4JAec?si=GXLqZueycg9tUt9P" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium text-sm flex items-center gap-1 hover:underline mt-auto">
                  YouTubeで見る <ExternalLink size={14} />
                </a>
              </div>
            </div>

             {/* Video 3: JMS 2025 */}
             <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <YouTubeEmbed id="4C8yYvN8VWg" title="Japan Mobility Show 2025" />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-bold text-lg mb-2 line-clamp-2">Japan Mobility Show 2025 レポート</h4>
                <ul className="text-sm text-slate-600 space-y-2 mb-4 flex-grow">
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">企画:</span> 最新モビリティトレンドの現地取材</li>
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">編集:</span> 膨大な情報を要点に絞り分かりやすく</li>
                  <li className="flex gap-2"><span className="font-semibold text-slate-800 min-w-[3em]">反応:</span> 業界動向への高い関心を獲得</li>
                </ul>
                 <a href="https://youtu.be/4C8yYvN8VWg?si=6pNMMbEh_LStRBqx" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium text-sm flex items-center gap-1 hover:underline mt-auto">
                  YouTubeで見る <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2 border-b border-slate-200 pb-2">
            <Briefcase className="text-blue-500" />
            Other Experience
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Internship */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900 leading-tight">ECマーケティングインターン</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">出版社 (6ヶ月間)</p>
                    </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    データ分析と母語（韓国語）を活かし、海外市場向けSNS広告キャンペーンの運用に携わりました。ExcelやMeta広告マネージャー等のツールを実務で使用し、上司・チームと連携しながら改善を重ねました。
                    当初は人に頼ることが苦手で抱え込みがちでしたが、業務量と進捗を整理したうえで早めに相談し、適切に依頼して業務を分担することで、チームとして成果を最大化できると学びました。
                    この経験を通じて、日本のビジネスマナーに加え、チームワークを意識したコミュニケーションを身につけました。
                </p>
            </div>

            {/* Cultural Exchange */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-2.5 rounded-lg text-purple-600">
                        <Users size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900 leading-tight">日韓交流インカレサークル</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">議論・ワークショップ参加 (2年間)</p>
                    </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    月2回、文化・社会課題・外交テーマについて、韓国人留学生と日本人学生が意見交換を行う場に継続参加しました。
                    さらに大学の休みには日韓国交正常化60周年の政府公認行事（ワークショップ形式）にも自ら手を挙げて参加し、異なる専門性を持つ仲間と議論を重ねました。
                    違う視点を持つ相手と取り組むことで、自分一人では得られない、より精度の高い答えに近づけることを実感し、多様性を成果に変える協働姿勢を学びました。
                </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Works;