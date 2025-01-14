import Image from 'next/image';
import React from 'react';

const features = [
  {
    title: "デジタルバッジの作成",
    description: "ブランドに合わせたデジタルバッジを簡単に作成できます。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    title: "配布の自動化",
    description: "条件を設定して、自動的にバッジを配布することができます。",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "実績の可視化",
    description: "バッジの配布状況や効果を簡単に確認できます。",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  }
];

export default function Features(): React.ReactElement {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          デジタルバッジの特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
