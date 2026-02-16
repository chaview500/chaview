import React from 'react';
import { Lightbulb, Thermometer, Radio, MapPin, Users, Wind } from 'lucide-react';

const WhyGo: React.FC = () => {
  return (
    <section id="why-go" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why GO & Proposals</h2>
            <p className="text-slate-600">
                GOを志望する理由と、ユーザー視点で考えた具体的な改善提案
            </p>
        </div>

        {/* 1. Motivation Section */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="p-10 sm:p-14 text-white">
              <h3 className="text-2xl font-bold mb-6 text-white">Why GO?</h3>
              <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                <p>
                  モビリティ領域を含む複数の社会課題に対し、アイデアと技術で解決策を見つけ、新規事業を継続的に推進している点に強く惹かれています。
                </p>
                <p>
                  大規模な社会的プロジェクトを扱いながらも、組織としてはスタートアップ的で、<span className="text-purple-400 font-bold">「個人の提案をアイデア化し、チームで議論して実行に移せる環境」</span>があると感じています。
                  私の強みである企画力とやり切る力を活かし、市場の革新に貢献したいです。
                </p>
              </div>
          </div>
        </div>

        {/* 2. Proposals Section */}
        <div>
            <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="text-yellow-500 fill-yellow-500" size={32} />
                <h3 className="text-2xl font-bold text-slate-800">入社後に実現したい改善アイデア（例）</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Idea 1: Shared Taxi */}
                <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-slate-900 leading-tight">アイデア例①：GOの「相乗りタクシー」改善案<br/><span className="text-base text-slate-500 font-normal">（車内温度トラブル対策）</span></h4>
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                            <Thermometer size={24} />
                        </div>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase mb-4 border-b border-slate-200 pb-2">課題：乗客間の温度感覚の不一致によるトラブル</p>
                    <div className="space-y-4 text-slate-700">
                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <span className="font-bold text-blue-600 block mb-1">案1：温度感覚の近いユーザーを優先マッチング</span>
                            <p className="text-sm">
                                理想は3ゾーン空調の車両導入ですが、まずはアプリ側で「暑がり／寒がり」などの温度傾向を事前設定し、優先機能をONにした場合は同じ傾向のユーザー同士を優先的にマッチングするアルゴリズムを設計します。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <span className="font-bold text-blue-600 block mb-1">案2：配車時に希望温度を事前送信</span>
                            <p className="text-sm">
                                数値指定ではなく「冷房最強・強・中・弱」など直感的な選択肢で希望を設定し、乗車前にドライバーへ送信することで、スムーズな調整を可能にします。
                            </p>
                        </div>
                         <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <span className="font-bold text-blue-600 block mb-1 flex items-center gap-1"><Users size={14}/> 案3：同性優先マッチング</span>
                            <p className="text-sm">
                                痴漢などへの不安を軽減するため、女性ユーザー向けに相乗りの組み合わせを同性優先にできる選択肢を追加します。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Idea 2: Waymo Experience */}
                <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-slate-900 leading-tight">アイデア例②：Waymo利用体験からの改善案<br/><span className="text-base text-slate-500 font-normal">（配車待ち時間と体験価値）</span></h4>
                        <div className="bg-green-100 p-2 rounded-lg text-green-600 shrink-0">
                            <Radio size={24} />
                        </div>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase mb-4 border-b border-slate-200 pb-2">課題：目の前に空車がいるのにアプリ配車で待たされる</p>
                    <div className="space-y-4 text-slate-700">
                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <span className="font-bold text-green-600 block mb-1 flex items-center gap-1"><MapPin size={14}/> 「流しのWaymo」を拾える機能</span>
                            <p className="text-sm">
                                通常タクシーのように、走ってくるWaymoに向かって手を挙げたら停車し、乗車後に目的地入力できる仕組み。日本のように「流しのタクシーを拾う文化」が根強い市場で、ユーザーにとって親しみやすい導線を作ります。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <span className="font-bold text-green-600 block mb-1">Plus：車内体験のパーソナライズ</span>
                            <ul className="text-sm list-disc list-inside space-y-2 mt-1">
                                <li>
                                    <span className="font-semibold text-slate-800">香りのパーソナライズ:</span> プロフィールに好みの香りを登録し、乗車時に車内の香りが自動で切り替わる仕組み。
                                </li>
                                <li>
                                    <span className="font-semibold text-slate-800">AI音声アシスタント連携:</span> 車内の前後モニターを活用し、Gemini等を搭載。乗客が音声で指示・会話できる体験を作り、移動を「高付加価値の時間」に変えます。
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyGo;