import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaDesktop, 
  FaProjectDiagram, 
  FaChartBar 
} from 'react-icons/fa';

function Sidebar() {
  return (
    <Nav className="flex-column p-3 bg-light" style={{ minHeight: '100vh' }}>
      <div className="sidebar-sticky">
        <h5 className="mb-4">📋 任务目录</h5>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="/" className="d-flex align-items-center">
            <FaHome className="me-2" /> 首页
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="/task1" className="d-flex align-items-center">
            <FaDesktop className="me-2" /> 任务一：部署验证
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="/task2" className="d-flex align-items-center">
            <FaProjectDiagram className="me-2" /> 任务二：架构分析
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="/task3" className="d-flex align-items-center">
            <FaChartBar className="me-2" /> 任务三：优秀项目分析
          </Nav.Link>
        </Nav.Item>
        
        <hr className="my-4" />
        
        <div className="mt-4">
          <h6>🔧 技术栈</h6>
          <small className="text-muted">
            React + Bootstrap + React Router
          </small>
        </div>
      </div>
    </Nav>
  );
}

export default Sidebar;