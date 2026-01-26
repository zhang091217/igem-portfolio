import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">🧬 欢迎来到iGEM Wiki任务展示</h1>
      <p className="lead mb-5">
        这里是2026 JLU-CP团队第二轮考核中Wiki任务的个人展示页面，
        集成了三个任务的所有成果。
      </p >
      
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <Card.Title>📸 任务一</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">项目部署与验证</Card.Subtitle>
              <Card.Text>
                成功在本地部署2025 JLU-CP项目，并验证运行状态。
              </Card.Text>
              <Button as={Link} to="/task1" variant="outline-primary">
                查看详情
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <Card.Title>🏗️ 任务二</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">技术架构分析</Card.Subtitle>
              <Card.Text>
                深入分析项目技术栈，绘制系统架构图，理解模块关系。
              </Card.Text>
              <Button as={Link} to="/task2" variant="outline-primary">
                查看详情
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <Card.Title>📊 任务三</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">优秀项目分析</Card.Subtitle>
              <Card.Text>
                研究多个"最佳Wiki"获奖项目，总结技术亮点和设计优点。
              </Card.Text>
              <Button as={Link} to="/task3" variant="outline-primary">
                查看详情
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div className="bg-light p-4 rounded">
        <h4>💡 网站特点</h4>
        <ul>
          <li>响应式设计，适配各种设备</li>
          <li>清晰的导航结构和目录索引</li>
          <li>集成了所有考核任务的展示</li>
          <li>准备部署到GitHub Pages</li>
        </ul>
      </div>
    </Container>
  );
}

export default Home;