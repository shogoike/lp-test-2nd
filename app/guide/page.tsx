"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Lightbulb,
  ChevronDown,
  HelpCircle,
  Tag,
  Check,
  ClipboardList,
  AlertCircle,
  Sparkles,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Heart,
} from "lucide-react";
import {
  heroContent,
  roadmapSteps,
  faqItems,
  checklistCategories,
  ctaContent,
} from "@/lib/guideContent";
import { handleLineClick } from "@/lib/lineConversion";

const roadmapColorMap: Record<string, Record<string, string>> = {
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-500",
    ring: "ring-orange-200",
    badge: "bg-orange-50 text-orange-600 border-orange-200",
    line: "bg-gradient-to-b from-orange-300 to-pink-300",
    tips: "bg-orange-50 border-orange-100",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-500",
    ring: "ring-pink-200",
    badge: "bg-pink-50 text-pink-600 border-pink-200",
    line: "bg-gradient-to-b from-pink-300 to-purple-300",
    tips: "bg-pink-50 border-pink-100",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-500",
    ring: "ring-purple-200",
    badge: "bg-purple-50 text-purple-600 border-purple-200",
    line: "bg-gradient-to-b from-purple-300 to-blue-300",
    tips: "bg-purple-50 border-purple-100",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-500",
    ring: "ring-blue-200",
    badge: "bg-blue-50 text-blue-600 border-blue-200",
    line: "bg-gradient-to-b from-blue-300 to-green-300",
    tips: "bg-blue-50 border-blue-100",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-500",
    ring: "ring-green-200",
    badge: "bg-green-50 text-green-600 border-green-200",
    line: "bg-green-300",
    tips: "bg-green-50 border-green-100",
  },
};

const checklistColorMap: Record<string, Record<string, string>> = {
  orange: {
    header: "bg-gradient-to-r from-orange-50 to-amber-50 border-orange-100",
    title: "text-orange-700",
    check: "bg-orange-500 border-orange-500",
    hover: "hover:bg-orange-50/50",
  },
  blue: {
    header: "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-100",
    title: "text-blue-700",
    check: "bg-blue-500 border-blue-500",
    hover: "hover:bg-blue-50/50",
  },
  green: {
    header: "bg-gradient-to-r from-green-50 to-emerald-50 border-green-100",
    title: "text-green-700",
    check: "bg-green-500 border-green-500",
    hover: "hover:bg-green-50/50",
  },
};

const categoryColors: Record<string, string> = {
  "引き止め対策": "bg-pink-50 text-pink-600 border-pink-200",
  "相談方法": "bg-purple-50 text-purple-600 border-purple-200",
  "権利・制度": "bg-blue-50 text-blue-600 border-blue-200",
};

export default function GuidePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showCelebration, setShowCelebration] = useState(false);

  const categories = ["all", ...new Set(faqItems.map((item) => item.category))];
  const filteredFaqItems =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const allItems = checklistCategories.flatMap((cat) => cat.items);
  const totalCount = allItems.length;
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (checkedCount === totalCount && totalCount > 0) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [checkedCount, totalCount]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60 blur-xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-amber-100 to-rose-100 rounded-full translate-y-1/3 -translate-x-1/4 opacity-60 blur-xl" />

        <div className="relative max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="inline-block px-5 py-2 bg-white text-orange-600 text-sm md:text-base font-bold rounded-full shadow-md mb-4">
            保育士専門の退職代行サービス
          </span>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/80 backdrop-blur rounded-full mb-6 shadow-sm">
            <BookOpen size={16} className="text-orange-500" />
            <span className="text-sm font-bold text-orange-600">退職ガイド</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
            {heroContent.catchCopy}
          </h1>

          <p className="text-gray-600 md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {heroContent.subCopy}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {heroContent.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
                >
                  <IconComponent size={16} className="text-pink-400" />
                  <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              ロードマップ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              退職までの5ステップ
            </h2>
            <p className="text-gray-500 text-sm">一つずつ、焦らず進めていきましょう</p>
          </div>

          <div className="relative">
            {roadmapSteps.map((step, index) => {
              const colors = roadmapColorMap[step.color];
              const IconComponent = step.icon;
              const isLast = index === roadmapSteps.length - 1;

              return (
                <div key={step.step} className="relative flex gap-4 md:gap-6 pb-10 last:pb-0">
                  {!isLast && (
                    <div
                      className={`absolute left-5 md:left-6 top-14 w-0.5 ${colors.line}`}
                      style={{ height: "calc(100% - 2.5rem)" }}
                    />
                  )}

                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-full flex items-center justify-center ring-4 ${colors.ring} ring-offset-2 ring-offset-white`}
                    >
                      <IconComponent size={20} className={colors.text} />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-500 border border-gray-200 shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                          Step {step.step}
                        </span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                          {step.timing}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.action}</p>

                      {step.tips && (
                        <div className={`flex items-start gap-2 p-3 rounded-xl border ${colors.tips}`}>
                          <Lightbulb size={16} className={`${colors.text} flex-shrink-0 mt-0.5`} />
                          <p className="text-xs text-gray-600 leading-relaxed">{step.tips}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50/50 to-pink-50/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 text-sm font-bold rounded-full mb-3">
              Q&A
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              保育士特有の「引き止め」対策
            </h2>
            <p className="text-gray-500 text-sm">よくある引き止めへの対処法をまとめました</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenFaqIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category === "all" ? "すべて" : category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              const catColor = categoryColors[item.category] || "bg-gray-50 text-gray-600 border-gray-200";

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-start gap-3 p-5 md:p-6 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mt-0.5">
                      <HelpCircle size={16} className="text-orange-500" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-gray-800 font-bold leading-relaxed block mb-2">
                        {item.question}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${catColor}`}>
                        <Tag size={10} />
                        {item.category}
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-gray-400 mt-1 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-[4.5rem]">
                      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                        <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-green-100 text-blue-600 text-sm font-bold rounded-full mb-3">
              チェックリスト
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              持ち物・書類チェックリスト
            </h2>
            <p className="text-gray-500 text-sm">タップしてチェックを入れていきましょう</p>
          </div>

          {/* Progress */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
                  <ClipboardList size={20} className="text-orange-500" />
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-700 block">達成度</span>
                  <span className="text-xs text-gray-500">
                    {checkedCount === totalCount ? "すべて完了!" : "あと少し!"}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-orange-600">{checkedCount}</span>
                <span className="text-gray-400 text-lg"> / {totalCount}</span>
              </div>
            </div>

            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 h-4 rounded-full transition-all duration-700 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {progress > 10 && <div className="absolute inset-0 bg-white/20 animate-pulse" />}
                </div>
              </div>
              <span className="absolute right-0 -top-6 text-sm font-bold text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>

            {showCelebration && (
              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 flex items-center gap-2 animate-bounce">
                <Sparkles size={18} className="text-green-500" />
                <p className="text-green-700 text-sm font-bold">
                  おめでとうございます！すべてのチェックが完了しました
                </p>
              </div>
            )}
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {checklistCategories.map((category) => {
              const colors = checklistColorMap[category.color] || checklistColorMap.orange;
              const categoryChecked = category.items.filter((item) => checked[item.id]).length;
              const categoryTotal = category.items.length;

              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`px-5 md:px-6 py-4 border-b ${colors.header}`}>
                    <div className="flex items-center justify-between">
                      <h3 className={`font-bold ${colors.title}`}>{category.title}</h3>
                      <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full">
                        {categoryChecked} / {categoryTotal}
                      </span>
                    </div>
                    {category.description && (
                      <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                    )}
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {category.items.map((item) => {
                      const isChecked = !!checked[item.id];
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => toggleItem(item.id)}
                            className={`w-full flex items-center gap-3 px-5 md:px-6 py-4 ${colors.hover} transition-colors text-left group`}
                          >
                            <div
                              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isChecked
                                  ? colors.check
                                  : "border-gray-300 bg-white group-hover:border-gray-400"
                              }`}
                            >
                              {isChecked && <Check size={14} className="text-white" strokeWidth={3} />}
                            </div>
                            <span
                              className={`text-sm transition-all duration-200 flex-grow ${
                                isChecked ? "text-gray-400 line-through" : "text-gray-700"
                              }`}
                            >
                              {item.label}
                            </span>
                            {"important" in item && item.important && !isChecked && (
                              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                                <AlertCircle size={10} />
                                重要
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500" />

        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
            <Heart size={16} className="text-pink-200" />
            <span className="text-sm font-medium text-white/90">あなたの味方です</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
            {ctaContent.title}
          </h2>
          <p className="text-white/80 mb-8 text-lg leading-relaxed max-w-xl mx-auto">
            {ctaContent.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {ctaContent.benefits.map((benefit, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <CheckCircle2 size={16} className="text-green-300" />
                <span className="text-sm text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            onClick={handleLineClick}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#06C755] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle size={22} fill="white" className="group-hover:animate-bounce" />
            <span>{ctaContent.buttonText}</span>
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-sm text-white/60 mt-6">{ctaContent.subText}</p>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-50 py-8 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition-colors shadow-md"
        >
          トップへ戻る
        </Link>
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 by 8seAls All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
