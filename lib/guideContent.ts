import {
  Flag,
  MessageSquare,
  FileText,
  Users,
  Smile,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";

export const heroContent = {
  catchCopy: "子どもたちの未来と同じくらい、\nあなたの人生も大切。",
  subCopy:
    "「辞めにくい」と言われる保育現場で、心身を壊さず、円満に次のステップへ進むための完全ガイド。",
  features: [
    { icon: Heart, text: "保育士経験者が監修" },
    { icon: Shield, text: "法律に基づいた正しい手順" },
    { icon: Sparkles, text: "新しい一歩を応援" },
  ],
};

export const roadmapSteps = [
  {
    step: 1,
    title: "LINEで無料相談",
    timing: "最短当日",
    action:
      "まずはLINEでお気軽にご相談ください。今の状況やお悩みをお聞きし、最適な退職プランをご提案します。匿名でOK、24時間受付しています。",
    tips: "「辞めたいけど言えない」「引き止められている」など、どんな状況でもご相談ください。",
    icon: Flag,
    color: "orange" as const,
  },
  {
    step: 2,
    title: "お申し込み・お支払い",
    timing: "ご納得いただけたら",
    action:
      "プランにご納得いただけたら、お申し込みへ。お支払い確認後、すぐに退職手続きの準備を開始します。",
    tips: "一律14,800円、追加費用は一切かかりません。",
    icon: MessageSquare,
    color: "pink" as const,
  },
  {
    step: 3,
    title: "園への退職連絡を代行",
    timing: "最短即日対応",
    action:
      "あなたに代わって園へ退職の意思を伝えます。園長や主任との直接のやり取りは一切不要。電話が来ることもありません。",
    tips: "退職届の作成もアドバイスしますので、書類の心配もいりません。",
    icon: FileText,
    color: "purple" as const,
  },
  {
    step: 4,
    title: "引き継ぎもサポート",
    timing: "退職日まで",
    action:
      "引き継ぎの調整も私たちが園との間に入って対応します。児童票や行事計画など、必要な引き継ぎ事項を整理し、あなたが園と直接やり取りしなくて済むようサポートします。",
    tips: "「途中で辞めたら迷惑がかかる」という心配は不要です。園が困らない形で進めます。",
    icon: Users,
    color: "blue" as const,
  },
  {
    step: 5,
    title: "退職完了・新しいスタート",
    timing: "手続き完了後",
    action:
      "退職届の受理確認、備品の返却方法、離職票などの書類受け取りまでフォロー。出勤せずにすべて完結できます。",
    tips: "有給休暇の消化もサポート。安心して次のステップへ踏み出しましょう！",
    icon: Smile,
    color: "green" as const,
  },
];

export const faqItems = [
  {
    question: "「担任を放り出すのか」と責められたら？",
    answer:
      "「最後まで責任を持って引き継ぎをします」と伝えましょう。クラス運営は組織の責任であり、個人の人生を縛るものではありません。あなたが辞めることは、園が人員確保する問題であって、あなたの責任ではありません。",
    category: "引き止め対策",
  },
  {
    question: "「次の人が決まるまで待って」と言われたら？",
    answer:
      "期限を切りましょう。「〇月末までは最大限協力しますが、それ以降は退職します」とはっきり意思表示を。民法上、正社員は2週間前の申告で退職可能です。",
    category: "引き止め対策",
  },
  {
    question: "「子どもたちがかわいそう」と言われたら？",
    answer:
      "これは感情に訴える典型的な引き止めです。子どもたちへの愛情と、あなた自身の人生は別問題。あなたが心身ともに健康でいることが、結果的に子どもたちのためにもなります。",
    category: "引き止め対策",
  },
  {
    question: "園長に直接言えない場合は？",
    answer:
      "主任や副園長など、話しやすい上司に相談するのも一つの方法です。それでも難しい場合は、退職代行サービスの利用も検討してください。あなたの心身の健康が最優先です。",
    category: "相談方法",
  },
  {
    question: "有給消化はできますか？",
    answer:
      "有給休暇は労働者の権利です。遠慮せず申請しましょう。「引き継ぎがあるから」と断られても、法律上は取得可能です。私たちがサポートする場合は、有給消化の交渉もお任せください。",
    category: "権利・制度",
  },
  {
    question: "年度途中でも退職できますか？",
    answer:
      "法律上は可能です。民法627条により、正社員は退職の2週間前に申告すれば退職できます。ただし、円満退職を望む場合は、1〜2ヶ月の猶予があると良いでしょう。心身に限界がある場合は、すぐに相談してください。",
    category: "権利・制度",
  },
];

export const checklistCategories = [
  {
    id: "return",
    title: "園に返却するもの",
    description: "最終出勤日までに確認しましょう",
    color: "orange" as const,
    items: [
      { id: "r1", label: "健康保険証", important: true },
      { id: "r2", label: "エプロン・名札" },
      { id: "r3", label: "鍵（ロッカー・門扉など）", important: true },
      { id: "r4", label: "保育資料・マニュアル" },
      { id: "r5", label: "印鑑（園に預けている場合）" },
      { id: "r6", label: "上履き・外履き" },
      { id: "r7", label: "園の備品（おもちゃ・教材など）" },
      { id: "r8", label: "制服（貸与の場合）" },
    ],
  },
  {
    id: "receive",
    title: "園から受け取るもの",
    description: "転職・失業保険に必要な書類です",
    color: "blue" as const,
    items: [
      { id: "g1", label: "離職票（1・2）", important: true },
      { id: "g2", label: "雇用保険被保険者証", important: true },
      { id: "g3", label: "年金手帳（預けている場合）" },
      { id: "g4", label: "源泉徴収票", important: true },
      { id: "g5", label: "健康保険資格喪失証明書" },
      { id: "g6", label: "退職証明書（必要な場合）" },
    ],
  },
  {
    id: "personal",
    title: "個人で準備すること",
    description: "退職後の手続きに備えて",
    color: "green" as const,
    items: [
      { id: "p1", label: "国民健康保険への切り替え確認" },
      { id: "p2", label: "国民年金への切り替え確認" },
      { id: "p3", label: "失業保険の申請準備（離職票が届いたら）" },
      { id: "p4", label: "転職活動の準備（履歴書・職務経歴書）" },
      { id: "p5", label: "次の園・職場への提出書類確認" },
    ],
  },
];

export const ctaContent = {
  title: "退職の不安、一人で抱えないでください",
  description:
    "保育士専門のスタッフが、あなたの状況に合わせて丁寧にサポートします。相談は何度でも無料です。",
  buttonText: "LINEで無料相談する",
  subText: "一律 14,800円（税込）",
  benefits: [
    "保育士経験のあるスタッフが対応",
    "園への連絡はすべて代行",
    "有給消化・退職金もサポート",
  ],
};
