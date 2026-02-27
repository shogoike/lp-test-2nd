import Link from "next/link";

export default function Tokushoho() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
            <div className="w-full max-w-3xl bg-white shadow-xl p-8 md:p-12 rounded-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 border-b pb-4">特定商取引法に基づく表記</h1>

                <div className="space-y-6 text-sm text-gray-700">
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">法人名</h2>
                        <p className="md:col-span-2">株式会社8seAls</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">所在地</h2>
                        <p className="md:col-span-2">〒273-0137<br />千葉県鎌ケ谷市道野辺本町2丁目26-1 コスモ鎌ヶ谷602</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">代表</h2>
                        <p className="md:col-span-2">池末知史</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">電話番号</h2>
                        <p className="md:col-span-2">080-2501-0289<br /><span className="text-xs text-gray-500">受付時間：10:00～17:00（土日祝を除く）※受付時間外は、メールにてご連絡ください。</span></p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">メールアドレス</h2>
                        <p className="md:col-span-2"><a href="mailto:asuyamemone@gmail.com" className="text-blue-600 hover:underline">asuyamemone@gmail.com</a></p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">運営統括責任者</h2>
                        <p className="md:col-span-2">池末知史</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">商品名</h2>
                        <p className="md:col-span-2">各種決済ページにてご確認ください。</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">追加手数料等の追加料金</h2>
                        <p className="md:col-span-2">コンビニ決済：手数料400円<br />※オンライン提供のため送料は発生しません。</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">返金ポリシー</h2>
                        <p className="md:col-span-2">商品の性質上、原則として返金には応じておりません。ただし、法令に基づく場合や弊社に重大な過失があった場合は、個別に対応いたします。</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">引渡時期</h2>
                        <p className="md:col-span-2">ご購入完了後、3〜5営業日以内にサービス提供に関するご案内メールを送信いたします。</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">受け付け可能な決済手段</h2>
                        <p className="md:col-span-2">クレジットカード決済、コンビニ決済</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">決済期間</h2>
                        <p className="md:col-span-2">クレジットカード決済の場合はご購入時に即時処理されます。コンビニ決済の場合は、ご注文後3日以内にお支払いください。</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">申込み期間の制限</h2>
                        <p className="md:col-span-2">デジタルコンテンツは常時購入可能ですが、期間限定商品については各商品ページに記載された販売期間内にご購入ください。</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-4">
                        <h2 className="font-semibold text-gray-900">販売価格</h2>
                        <p className="md:col-span-2">各種決済ページにてご確認ください。</p>
                    </section>

                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="inline-block px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-colors">
                        LPトップへ戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
