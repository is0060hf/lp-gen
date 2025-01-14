import Image from 'next/image';
import React from 'react';

export default function Hero(): React.ReactElement {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            デジタルバッジの無料配布をすると
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            簡単な操作で、あなたのブランドを広めましょう
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            無料で始める
          </button>
        </div>
        <div className="relative h-[400px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="チームワーク"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
