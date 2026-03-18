import React, { useState } from 'react';

const Home: React.FC = () => {
    // 将来的に配置したアイテムを管理するステートなどの置き場
    const [items, setItems] = useState([]);

    return (
        <div className="home-layout">
            <header className="home-header">
                <h2>Aquarium Layout Simulator</h2>
                <p>ドラッグ＆ドロップで理想の水景をデザインしましょう（開発中）</p>
            </header>

            <div className="workspace">
                {/* 左側：アセット（素材）リスト */}
                <aside className="asset-sidebar">
                    <h3>Assets</h3>
                    <div className="asset-category">
                        <h4>Driftwood (流木)</h4>
                        <div className="placeholder-item">Item 1</div>
                        <div className="placeholder-item">Item 2</div>
                    </div>
                    <div className="asset-category">
                        <h4>Stone (石)</h4>
                        <div className="placeholder-item">Item 3</div>
                    </div>
                </aside>

                {/* 中央：キャンバス（水槽本体） */}
                <section className="canvas-area">
                    <div className="tank-frame">
                        <p>ここに120cm水槽のキャンバスを実装予定</p>
                        {/* ここにFabric.jsやKonvaなどの描画ライブラリを載せます */}
                    </div>
                </section>

                {/* 右側：プロパティ（設定・Amazonリンク） */}
                <aside className="property-sidebar">
                    <h3>Details</h3>
                    <div className="amazon-preview">
                        <p>選択した素材のAmazonリンクがここに表示されます</p>
                    </div>
                    <button className="primary-button">保存 / 出力</button>
                </aside>
            </div>
        </div>
    );
};

export default Home;