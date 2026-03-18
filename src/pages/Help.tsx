import React from 'react';

const Help: React.FC = () => {
    return (
        <div style={{ padding: '2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            <h1>ヘルプ / 使い方</h1>

            <section>
                <h2>基本的な操作方法</h2>
                <ul>
                    <li><strong>キャンバス操作:</strong> ドラッグ＆ドロップで素材を配置します。</li>
                    <li><strong>素材の選択:</strong> 石、流木、水草などのカテゴリから好みのパーツを選びます。</li>
                    <li><strong>Amazonリンク:</strong> 配置したパーツに対応する、あるいは類似する製品をAmazonで確認できます。</li>
                </ul>
            </section>

            <section>
                <h2>FAQ</h2>
                <p><strong>Q. 登録は必要ですか？</strong><br />
                    A. いいえ、登録不要でどなたでもシミュレーターをご利用いただけます。</p>
                <p><strong>Q. スマホでも動きますか？</strong><br />
                    A. PCブラウザでの操作を推奨していますが、タブレット等でも閲覧・操作が可能です。</p>
            </section>
        </div>
    );
};

export default Help;