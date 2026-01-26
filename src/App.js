import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// 导入组件
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// 导入页面
import Home from './pages/Home';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            {/* 侧边栏 */}
            <div className="col-md-3 col-lg-2 d-md-block sidebar">
              <Sidebar />
            </div>
            
            {/* 主要内容 */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task1" element={<Task1 />} />
                <Route path="/task2" element={<Task2 />} />
                <Route path="/task3" element={<Task3 />} />
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;