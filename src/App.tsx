import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// 後ほど作成するページコンポーネントをインポート
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>ホーム</Link>
          <Link to="/help" style={{ marginRight: '1rem' }}>ヘルプ</Link>
          <Link to="/about">このサイトについて</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer style={{ marginTop: '2rem', padding: '1rem', fontSize: '0.8rem' }}>
          &copy; 2026 Aqua-Draft
        </footer>
      </div>
    </Router>
  );
}

export default App;