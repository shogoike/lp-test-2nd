"use client";

import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { handleLineClick } from "@/lib/lineConversion";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <img src="/pic/icon/1_2x.avif" alt="Logo" className="h-8 md:h-10 w-auto object-contain mx-auto" />
          </Link>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">料金プラン</h1>
          <p className="text-gray-600 text-sm mt-2">保育士さん専用 退職代行サービス</p>
        </div>

        {/* メイン料金カード */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          {/* 上部バナー */}
          <div className="bg-pink-500 text-white text-center py-3 px-4">
            <span className="text-sm font-bold">3月31日まで 期間限定価格</span>
          </div>

          <div className="p-6 md:p-8 text-center">
            {/* 通常価格 */}
            <p className="text-gray-500 text-sm mb-1">
              通常価格 <span className="line-through">19,800円</span>（税込）
            </p>

            {/* 割引バッジ */}
            <div className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full mb-3">
              25% OFF
            </div>

            {/* メイン価格 */}
            <div className="flex items-end justify-center gap-1 mb-4">
              <span className="font-black text-lg text-gray-800">一律</span>
              <span className="font-black text-5xl md:text-6xl text-red-600 tracking-tight">14,800</span>
              <span className="font-black text-xl text-gray-800">円</span>
              <span className="text-sm text-gray-500 mb-1">（税込）</span>
            </div>

            <p className="text-red-600 font-bold text-sm mb-6">追加費用は一切かかりません</p>

            {/* CTA */}
            <a
              href="#"
              onClick={handleLineClick}
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-black text-base md:text-lg py-3 px-8 rounded-full transition-colors shadow-md"
            >
              <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-6 h-6 rounded-md border border-white/50" />
              まずは無料で相談する
            </a>
            <p className="text-gray-500 text-xs mt-2">匿名OK・24時間受付</p>
          </div>
        </div>

        {/* サービス内容 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-lg font-black text-gray-900 mb-4 text-center">14,800円に含まれるサービス</h2>
          <div className="space-y-3">
            {[
              "園への退職連絡の代行",
              "園長・保護者への連絡は一切不要",
              "有給休暇の消化サポート",
              "引き継ぎの調整・代行",
              "退職届の作成アドバイス",
              "退職後の書類受取サポート",
              "無制限のLINE相談",
              "即日対応OK（最短当日退職）",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 他社比較 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-lg font-black text-gray-900 mb-4 text-center">他社との料金比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-pink-200">
                  <th className="py-3 px-2 text-left text-gray-600 font-medium"></th>
                  <th className="py-3 px-2 text-center bg-pink-50 rounded-t-lg">
                    <span className="text-pink-600 font-black">アスヤメ</span>
                  </th>
                  <th className="py-3 px-2 text-center text-gray-600 font-medium">A社</th>
                  <th className="py-3 px-2 text-center text-gray-600 font-medium">B社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 font-medium text-gray-700">料金</td>
                  <td className="py-3 px-2 text-center bg-pink-50 font-black text-red-600">14,800円</td>
                  <td className="py-3 px-2 text-center text-gray-600">25,000〜30,000円</td>
                  <td className="py-3 px-2 text-center text-gray-600">30,000〜50,000円</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 font-medium text-gray-700">追加費用</td>
                  <td className="py-3 px-2 text-center bg-pink-50 font-bold text-green-600">なし</td>
                  <td className="py-3 px-2 text-center text-gray-600">場合あり</td>
                  <td className="py-3 px-2 text-center text-gray-600">場合あり</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 font-medium text-gray-700">保育士特化</td>
                  <td className="py-3 px-2 text-center bg-pink-50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="py-3 px-2 text-center">
                    <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="py-3 px-2 text-center">
                    <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium text-gray-700">即日対応</td>
                  <td className="py-3 px-2 text-center bg-pink-50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="py-3 px-2 text-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="py-3 px-2 text-center">
                    <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* お支払い方法 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-lg font-black text-gray-900 mb-4 text-center">お支払い方法</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">クレジットカード決済</span>
                <span className="text-gray-500 text-xs block">即時処理</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">コンビニ決済</span>
                <span className="text-gray-500 text-xs block">手数料400円 / ご注文後3日以内にお支払い</span>
              </div>
            </div>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg font-black text-gray-900 mb-4 text-center">ご注意事項</h2>
          <ul className="space-y-2 text-xs text-gray-600 list-disc list-inside">
            <li>商品の性質上、原則として返金には応じておりません。ただし、法令に基づく場合や弊社に重大な過失があった場合は個別に対応いたします。</li>
            <li>お支払い確認後、即日〜翌営業日以内に対応を開始します。</li>
            <li>期間限定価格は予告なく終了する場合があります。</li>
          </ul>
        </div>

        {/* フッターリンク */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition-colors shadow-md">
            LPトップへ戻る
          </Link>
          <div className="flex justify-center gap-6 text-xs text-gray-500 mt-4">
            <Link href="/tokushoho" className="hover:text-pink-600 transition-colors">特定商取引法に基づく表記</Link>
            <Link href="/privacy" className="hover:text-pink-600 transition-colors">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
