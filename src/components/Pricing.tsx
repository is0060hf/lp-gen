import React from 'react';

const plans = [
  {
    name: "Free",
    price: "無料",
    features: [
      "デジタルバッジの作成",
      "基本的な配布機能",
      "基本的な分析機能",
    ]
  },
  {
    name: "スタートアップ",
    price: "50,000",
    features: [
      "デジタルバッジの作成",
      "高度な配布機能",
      "詳細な分析機能",
      "カスタマイズ機能",
    ]
  },
  {
    name: "スタンダード",
    price: "150,000",
    features: [
      "デジタルバッジの作成",
      "高度な配布機能",
      "詳細な分析機能",
      "カスタマイズ機能",
      "優先サポート",
      "API連携",
    ]
  },
  {
    name: "エンタープライズ",
    price: "Ask",
    features: [
      "デジタルバッジの作成",
      "高度な配布機能",
      "詳細な分析機能",
      "カスタマイズ機能",
      "優先サポート",
      "API連携",
      "専任サポート",
      "カスタム開発対応",
    ]
  }
];

const comparisonFeatures = [
  {
    name: "デジタルバッジの作成",
    free: true,
    startup: true,
    standard: true,
    enterprise: true,
  },
  {
    name: "基本的な配布機能",
    free: true,
    startup: true,
    standard: true,
    enterprise: true,
  },
  {
    name: "基本的な分析機能",
    free: true,
    startup: true,
    standard: true,
    enterprise: true,
  },
  {
    name: "高度な配布機能",
    free: false,
    startup: true,
    standard: true,
    enterprise: true,
  },
  {
    name: "詳細な分析機能",
    free: false,
    startup: true,
    standard: true,
    enterprise: true,
  },
  {
    name: "カスタマイズ機能",
    free: false,
    startup: true,
    standard: true,
    enterprise: true,
  },
  {
    name: "優先サポート",
    free: false,
    startup: false,
    standard: true,
    enterprise: true,
  },
  {
    name: "API連携",
    free: false,
    startup: false,
    standard: true,
    enterprise: true,
  },
  {
    name: "専任サポート",
    free: false,
    startup: false,
    standard: false,
    enterprise: true,
  },
  {
    name: "カスタム開発対応",
    free: false,
    startup: false,
    standard: false,
    enterprise: true,
  },
];

export default function Pricing(): React.ReactElement {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          法人向けプラン
        </h2>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">
                  {plan.price === "Ask" ? "お問い合わせ" : `¥${plan.price}`}
                </span>
                {plan.price !== "無料" && plan.price !== "Ask" && (
                  <span className="text-gray-600">/月</span>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                {plan.price === "Ask" ? "お問い合わせ" : "選択する"}
              </button>
            </div>
          ))}
        </div>

        {/* Plan Comparison Table */}
        <h2 className="text-3xl font-bold text-center mb-12">
          プラン比較表
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left">機能</th>
                <th className="py-4 px-6 text-center">Free</th>
                <th className="py-4 px-6 text-center">スタートアップ</th>
                <th className="py-4 px-6 text-center">スタンダード</th>
                <th className="py-4 px-6 text-center">エンタープライズ</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {feature.free ? (
                      <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.startup ? (
                      <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.standard ? (
                      <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.enterprise ? (
                      <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
