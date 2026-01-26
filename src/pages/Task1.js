import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';

function Task1() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">📸 任务一：项目部署与验证</h1>
      
      <Card className="mb-4 shadow">
        <Card.Header>任务描述</Card.Header>
        <Card.Body>
          <p>
            成功克隆、部署并运行指定的"2025 JLU-CP"项目在本地开发环境。
          </p >
          <p className="mb-0">
            <strong>项目链接：</strong>
            <a href=" ">
              https://gitlab.igem.org/2025/jlu-cp.git
            </a >
          </p >
        </Card.Body>
      </Card>
      
      <Card className="mb-4 shadow">
        <Card.Header>部署结果截图</Card.Header>
        <Card.Body>
          <p className="text-muted mb-3">
            以下为本地部署成功后，浏览器访问首页的完整截图：
          </p >
          
          {/* 这里替换为你的截图路径 */}
          {/* 确保这行代码是这样的 */}
{/* 确保这行代码是这样的 */}
<Image 
  src={process.env.PUBLIC_URL + "/images/task1-screenshot.png"} 
  alt="本地部署截图" 
  fluid 
  thumbnail
  className="border"
/>
          
          <div className="mt-3">
            <small className="text-muted">
              * 请将你的截图文件放置在 <code>public/images/task1-screenshot.png</code>
            </small>
          </div>
        </Card.Body>
      </Card>
      
      <Card className="shadow">
        <Card.Header>部署步骤总结</Card.Header>
        <Card.Body>
          <ol>
            <li>使用Git克隆项目到本地</li>
            <li>安装依赖包：<code>npm install</code></li>
            <li>启动开发服务器：<code>npm start</code></li>
            <li>在浏览器中访问 <code>http://localhost:3000</code></li>
            <li>确认项目正常运行，无报错信息</li>
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Task1;