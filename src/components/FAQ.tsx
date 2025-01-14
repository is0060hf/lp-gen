"use client";

import React, { useState } from 'react';

export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "サービスの利用開始方法を教えてください",
      answer: "無料プランから始めていただけます。アカウント登録後、すぐにご利用いただけます。"
    },
    {
      question: "カスタマイズ可能な範囲を教えてください",
      answer: "プランによって異なりますが、基本的なデザインからシステム連携まで幅広くカスタマイズ可能です。"
    },
    {
      question: "サポート体制について教えてください",
      answer: "各プランに応じたサポート体制をご用意しています。エンタープライズプランでは24時間体制でサポートいたします。"
    },
    {
      question: "料金の支払い方法について",
      answer: "クレジットカード決済、銀行振込に対応しています。年間契約の場合は割引もご用意しております。"
    },
    {
      question: "解約方法について",
      answer: "管理画面から簡単に解約手続きが可能です。ご不明な点があればサポートまでお問い合わせください。"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
