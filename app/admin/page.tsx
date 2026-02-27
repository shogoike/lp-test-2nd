"use client";

import { useState, useEffect } from "react";
import { images } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";

type Selections = {
    hero_view: number;
    kyokan: number;
    ansin: number;
    erabareruriyuu: number;
    price: number;
};

export default function Admin() {
    const [selections, setSelections] = useState<Selections>({
        hero_view: 0,
        kyokan: 0,
        ansin: 0,
        erabareruriyuu: 0,
        price: 0,
    });
    const [layoutVariant, setLayoutVariant] = useState<"default" | "price">("default");

    const [generatedUrl, setGeneratedUrl] = useState("");
    const [baseUrl, setBaseUrl] = useState("");

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    const handleChange = (category: keyof Selections, value: number) => {
        setSelections(prev => ({ ...prev, [category]: value }));
    };

    const generateRandom = () => {
        const randomSelections = {
            hero_view: Math.floor(Math.random() * Math.max(1, images.hero_view.length)),
            kyokan: Math.floor(Math.random() * Math.max(1, images.kyokan.length)),
            ansin: Math.floor(Math.random() * Math.max(1, images.ansin.length)),
            erabareruriyuu: Math.floor(Math.random() * Math.max(1, images.erabareruriyuu.length)),
            price: Math.floor(Math.random() * Math.max(1, images.price.length)),
        };
        setSelections(randomSelections);
    };

    useEffect(() => {
        const params = new URLSearchParams();
        if (images.hero_view.length > 0) params.set("hero", selections.hero_view.toString());
        if (images.kyokan.length > 0) params.set("kyokan", selections.kyokan.toString());
        if (images.ansin.length > 0) params.set("ansin", selections.ansin.toString());
        if (images.erabareruriyuu.length > 0) params.set("erabareruriyuu", selections.erabareruriyuu.toString());
        if (images.price.length > 0) params.set("price", selections.price.toString());
        if (layoutVariant !== "default") params.set("layout", layoutVariant);

        setGeneratedUrl(`${baseUrl}/?${params.toString()}`);
    }, [selections, baseUrl, layoutVariant]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedUrl);
        alert("URLをコピーしました！");
    };

    const renderCategory = (title: string, category: keyof Selections, keyInUrl: string) => {
        const list = images[category];
        if (!list || list.length === 0) return null;

        return (
            <div className="mb-8 p-4 bg-white shadow rounded-lg">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">{title}</h2>
                <div className="flex flex-wrap gap-4">
                    {list.map((img, idx) => (
                        <div
                            key={idx}
                            className={`cursor-pointer border-4 rounded overflow-hidden transition-all ${selections[category] === idx ? 'border-blue-500 scale-105 shadow-lg' : 'border-transparent hover:border-gray-300'}`}
                            onClick={() => handleChange(category, idx)}
                            style={{ width: '150px' }}
                        >
                            <div className="relative h-24 bg-gray-100">
                                <Image
                                    src={`/pic/${category}/${img}`}
                                    alt={`${title} - ${idx}`}
                                    fill
                                    sizes="150px"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="text-center text-xs py-1 bg-gray-50 text-gray-700">パターン {idx}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">LPジェネレーター管理画面</h1>
                    <Link href="/" className="text-blue-600 hover:underline">デフォルトLPへ</Link>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg mb-8 sticky top-4 z-10 border border-blue-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-700">生成されたURL (A/Bテスト用)</h2>

                        {/* レイアウト切り替えトグル */}
                        <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200">
                            <button
                                onClick={() => setLayoutVariant("default")}
                                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${layoutVariant === "default" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                            >
                                通常版
                            </button>
                            <button
                                onClick={() => setLayoutVariant("price")}
                                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${layoutVariant === "price" ? "bg-white text-purple-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                            >
                                料金最上位版
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            readOnly
                            value={generatedUrl}
                            className="flex-1 p-3 border rounded text-sm text-gray-600 bg-gray-50 w-full"
                        />
                        <button
                            onClick={copyToClipboard}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors"
                        >
                            コピー
                        </button>
                        <a
                            href={generatedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition-colors flex items-center justify-center whitespace-nowrap"
                        >
                            プレビューを開く
                        </a>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-end">
                        <button
                            onClick={generateRandom}
                            className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded text-sm font-semibold transition-colors"
                        >
                            ランダムに組み合わせる
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <div>
                        {renderCategory("ヒーロービュー (ファーストビュー)", "hero_view", "hero")}
                        {renderCategory("共感セクション", "kyokan", "kyokan")}
                        {renderCategory("安心セクション", "ansin", "ansin")}
                    </div>
                    <div>
                        {renderCategory("選ばれる理由セクション", "erabareruriyuu", "erabareruriyuu")}
                        {renderCategory("料金セクション", "price", "price")}
                    </div>
                </div>

            </div>
        </div>
    );
}
