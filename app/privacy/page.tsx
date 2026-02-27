import Link from "next/link";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
            <div className="w-full max-w-3xl bg-white shadow-xl p-8 md:p-12 rounded-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 border-b pb-4">プライバシーポリシー</h1>

                <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
                    <p>
                        8seAls（以下、「当社」といいます。）は、当社が提供するサービス（以下、「本サービス」といいます。）において取得する個人情報について、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定め、これを遵守し、適切な管理と保護に努めます。
                    </p>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第1条（個人情報の定義）</h2>
                        <p>
                            「個人情報」とは、個人情報保護法に定められた、生存する個人に関する情報であり、氏名、住所、電話番号、メールアドレス等により特定の個人を識別できる情報を指します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第2条（取得する個人情報）</h2>
                        <p>当社が取得する個人情報は、以下のとおりです。</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>氏名</li>
                            <li>メールアドレス</li>
                            <li>電話番号</li>
                            <li>お問い合わせ時にご提供いただくその他の情報</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第3条（個人情報の利用目的）</h2>
                        <p>当社が取得した個人情報は、以下の目的のために利用します。</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>お問い合わせへの対応</li>
                            <li>本サービスの提供および運営</li>
                            <li>利用状況の把握およびサービス改善</li>
                            <li>必要に応じたご連絡</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第4条（個人情報の管理）</h2>
                        <p>
                            当社は、個人情報を正確かつ最新の状態に保つよう努め、漏洩、紛失、改ざん等を防止するために、必要かつ適切な安全管理措置を講じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第5条（個人情報の第三者提供）</h2>
                        <p>当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>法令に基づく場合</li>
                            <li>人の生命、身体または財産の保護のために必要であり、本人の同意を得ることが困難な場合</li>
                            <li>公衆衛生の向上や児童の健全な育成のために特に必要な場合</li>
                            <li>国の機関や地方公共団体等が法令の定める事務を遂行する上で協力する必要がある場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第6条（Cookieの使用）</h2>
                        <p>
                            当社ウェブサイトでは、ユーザー体験の向上やアクセス解析のため、Cookieを使用することがあります。Cookieは個人を特定する情報を含まず、ブラウザの設定により拒否することも可能です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第7条（個人情報の開示・訂正・削除）</h2>
                        <p>
                            ご本人から、自己の個人情報について開示、訂正、追加、削除のご請求があった場合には、本人確認を行った上で、速やかに対応いたします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第8条（免責事項）</h2>
                        <p>
                            当ウェブサイトからリンクされている他のサイトにおける個人情報の取り扱いについては、当社は責任を負いかねますので、各リンク先のプライバシーポリシーをご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-3">第9条（プライバシーポリシーの変更）</h2>
                        <p>
                            本ポリシーの内容は、関連法令等の改正や当社方針の変更等に応じて、予告なく変更されることがあります。変更後の内容は当社ウェブサイトに掲載した時点で効力を有するものとします。
                        </p>
                    </section>

                    <div className="mt-8 p-6 bg-gray-100 rounded">
                        <h3 className="font-bold text-gray-900 mb-2">お問い合わせ窓口</h3>
                        <p className="mb-2">本ポリシーに関するお問い合わせは、以下の窓口までご連絡ください。</p>
                        <p>
                            株式会社8seAls<br />
                            〒273-0137 千葉県鎌ケ谷市道野辺本町２丁目２６−１ コスモ鎌ヶ谷602<br />
                            E-mail：<a href="mailto:asuyamemone@gmail.com" className="text-blue-600 hover:underline">asuyamemone@gmail.com</a>
                        </p>
                        <p className="mt-4 text-xs text-gray-500">制定日：2023年5月3日</p>
                    </div>
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
