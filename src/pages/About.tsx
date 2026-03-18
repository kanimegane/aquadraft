import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ padding: '2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            <h1>このサイトについて</h1>

            <section>
                <h2>アクアドラフト (Aqua-Draft) とは</h2>
                <p>
                    アクアドラフトは、アクアリウムのレイアウトをブラウザ上で直感的にシミュレーションできるツールです。
                    理想の水景を描き、それに必要な素材や機材を具体化することで、アクアリストの皆様の創造を形にするお手伝いをします。
                </p>
            </section>

            <section>
                <h2>運営者情報</h2>
                <p>運営者：山﨑 真和</p>
                <p>お問い合わせ：GitHubリポジトリのIssue、またはSNS等を通じてご連絡ください。</p>
            </section>

            <section style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
                <h2>免責事項・アライアンス</h2>
                <p>
                    <strong>Amazonアソシエイトについて</strong><br />
                    aqua-draft.comは、Amazon.co.jpを宣伝しリンクすることによって紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                </p>
                <p>
                    <strong>プライバシーポリシー</strong><br />
                    当サイトでは、利用状況の分析のためにCookieを使用する場合があります。取得された情報は統計的に処理され、個人を特定する目的には使用されません。
                </p>
            </section>
        </div>
    );
};

export default About;