import React from 'react';

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-gray-900 text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              デジタルバッジの無料配布をすると
            </h2>
            <p className="text-gray-400 mb-8">
              簡単な操作で、あなたのブランドを広めましょう
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              無料で始める
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">サービス</h3>
              <ul className="space-y-2">
                <li>機能一覧</li>
                <li>料金プラン</li>
                <li>導入事例</li>
                <li>よくある質問</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">会社情報</h3>
              <ul className="space-y-2">
                <li>会社概要</li>
                <li>お問い合わせ</li>
                <li>プライバシーポリシー</li>
                <li>利用規約</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Mintice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
