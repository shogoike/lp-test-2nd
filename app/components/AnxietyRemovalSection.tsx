"use client";

import { CheckCircle2, ChevronRight, HelpCircle, AlertCircle, FileText, XCircle } from "lucide-react";

export default function AnxietyRemovalSection() {
    return (
        <section className="w-full max-w-2xl mx-auto px-4 py-12 bg-white">
            {/* 1. 実績・安心感 */}
            <div className="mb-12 text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug mb-4">
                    もう、一人で悩む必要はありません
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <span className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                        <CheckCircle2 size={16} /> 相談実績多数
                    </span>
                    <span className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                        <CheckCircle2 size={16} /> 即日対応可能
                    </span>
                    <span className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                        <CheckCircle2 size={16} /> 追加費用0円
                    </span>
                </div>
            </div>

            {/* 2. 対応範囲（できる・できない早見表） */}
            <div className="mb-12">
                <h3 className="text-xl font-bold border-l-4 border-rose-500 pl-3 mb-6 flex items-center gap-2">
                    <FileText className="text-rose-500" />
                    当サービスの対応範囲
                </h3>
                <div className="bg-white border text-sm md:text-base border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <tbody>
                            <tr className="border-b bg-gray-50">
                                <th className="py-3 px-4 font-semibold text-gray-700 w-1/3">雇用形態</th>
                                <td className="py-3 px-4 font-medium flex items-center gap-2">
                                    <span className="text-emerald-500"><CheckCircle2 size={18} /></span> 正社員・契約社員・パート対応
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th className="py-3 px-4 font-semibold text-gray-700 bg-gray-50">試用期間中</th>
                                <td className="py-3 px-4 font-medium flex items-center gap-2">
                                    <span className="text-emerald-500"><CheckCircle2 size={18} /></span> 即日退職可能
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50">
                                <th className="py-3 px-4 font-semibold text-gray-700">休職中・即日欠勤</th>
                                <td className="py-3 px-4 font-medium flex items-center gap-2">
                                    <span className="text-emerald-500"><CheckCircle2 size={18} /></span> 出社せずにそのまま退職可能
                                </td>
                            </tr>
                            <tr>
                                <th className="py-3 px-4 font-semibold text-gray-700 bg-gray-50">引継ぎ</th>
                                <td className="py-3 px-4 text-gray-600">
                                    簡単な引き継ぎ書を郵送等で対応すればOK
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 3. 退職までの流れ（タイムライン） */}
            <div className="mb-12">
                <h3 className="text-xl font-bold border-l-4 border-rose-500 pl-3 mb-8 flex items-center gap-2">
                    <ChevronRight className="text-rose-500" />
                    退職完了までの3ステップ
                </h3>
                <div className="relative border-l-2 border-rose-200 ml-3 md:ml-6 space-y-8">
                    <div className="relative pl-8">
                        <span className="absolute -left-3 top-1 bg-rose-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">無料のLINE相談</h4>
                        <p className="text-sm text-gray-600">まずは今の状況をお聞かせください。無理な勧誘は一切ありません。</p>
                    </div>
                    <div className="relative pl-8">
                        <span className="absolute -left-3 top-1 bg-rose-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">お支払い・依頼</h4>
                        <p className="text-sm text-gray-600">ご納得いただけたら正式にご依頼。クレジットカードや銀行振込に対応しています。</p>
                    </div>
                    <div className="relative pl-8">
                        <span className="absolute -left-3 top-1 bg-rose-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">園への連絡・退職完了</h4>
                        <p className="text-sm text-gray-600">私たちが代わりに退職の意思を伝えます。あとは完了の報告を待つだけです。</p>
                    </div>
                </div>
            </div>

            {/* 4. 依頼時に用意するもの */}
            <div className="mb-12 bg-rose-50 rounded-3xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="text-rose-500" />
                    依頼時に必要なもの（これだけでOK）
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-rose-800">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-400" /> あなたのお名前・連絡先</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-400" /> 保育園の名称と連絡先</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-400" /> 退職希望日（即日も可）</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-400" /> 園から借りている物（後日郵送可能）</li>
                </ul>
            </div>

            {/* 5. リスクと対処法 (Q&A) */}
            <div className="mb-8">
                <h3 className="text-xl font-bold border-l-4 border-rose-500 pl-3 mb-6 flex items-center gap-2">
                    <HelpCircle className="text-rose-500" />
                    よくある不安と対処法 (Q&A)
                </h3>
                <div className="space-y-4">
                    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800">
                            <span>Q. 園から直接連絡が来たり、家に来たりしませんか？</span>
                            <span className="transition group-open:rotate-180">
                                <ChevronRight size={20} className="text-gray-400" />
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                            A. 代行時に「本人や家族には直接連絡しないよう」強く伝達します。そのため、ほとんどのケースで直接の連絡や訪問はありません。万が一連絡が来ても、絶対に出る必要はありません。
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800">
                            <span>Q. 園に置いてある私物はどうすればいいですか？</span>
                            <span className="transition group-open:rotate-180">
                                <ChevronRight size={20} className="text-gray-400" />
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                            A. 園に郵送してほしい旨をお伝えします。どうしても後から持ち出しづらいケースもあるため、退職を決意した時点で、目立たないように少しずつ持ち帰っておくことをお勧めします。
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800">
                            <span>Q. 離職票や源泉徴収票はちゃんともらえますか？</span>
                            <span className="transition group-open:rotate-180">
                                <ChevronRight size={20} className="text-gray-400" />
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                            A. はい。これらは法律で事業所に発行が義務付けられている書類です。ご自身宛に郵送してもらうよう、私たちが責任を持ってお伝えします。
                        </div>
                    </details>
                    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800">
                            <span>Q. 損害賠償で訴えられることはありませんか？</span>
                            <span className="transition group-open:rotate-180">
                                <ChevronRight size={20} className="text-gray-400" />
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                            A. 「ただ退職するだけ」で損害賠償請求が認められたケースは原則ありません。裁判費用や手間の観点から、園側が訴訟を起こす可能性は極めて低いです。
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
