import React from 'react';
import { Container, Card, Table, ListGroup } from 'react-bootstrap';

function Task3() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">📊 任务三：优秀项目分析</h1>
      
      <Card className="mb-4 shadow">
        <Card.Header>分析概述</Card.Header>
        <Card.Body>
          <p>
            本任务研究了5个获得iGEM"最佳Wiki"奖的优秀项目，分析了它们的技术框架、交互设计和创新点。
          </p >
          <p className="mb-0">
            <strong>分析时间：</strong>2026年1月<br />
            <strong>分析项目数：</strong>5个最佳Wiki获奖项目<br />
            <strong>主要关注点：</strong>技术实现、用户体验、创新设计
          </p >
        </Card.Body>
      </Card>
      
      <Card className="mb-4 shadow">
        <Card.Header>📈 优秀项目分析表</Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>项目名称</th>
                <th>技术框架</th>
                <th>设计亮点</th>
                <th>创新点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024 MIT</td>
                <td>React + Three.js</td>
                <td>3D分子可视化</td>
                <td>交互式实验模拟</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2023 Heidelberg</td>
                <td>Vue.js + D3.js</td>
                <td>动态数据图表</td>
                <td>实时数据更新</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2022 Stanford</td>
                <td>Next.js + Tailwind</td>
                <td>响应式设计优秀</td>
                <td>SSR优化加载</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2021 TokyoTech</td>
                <td>React + GSAP动画</td>
                <td>流畅页面过渡</td>
                <td>叙事式展示</td>
              </tr>
              <tr>
                <td>5</td>
                <td>2020 Cambridge</td>
                <td>静态网站生成</td>
                <td>简洁明了</td>
                <td>访问速度快</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <Card className="h-100 shadow">
            <Card.Header>💡 技术框架亮点</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>React占主导</strong>：大多数团队选择React作为前端框架
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>数据可视化</strong>：D3.js、Three.js等用于科学数据展示
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>响应式设计</strong>：全部项目都实现了移动端适配
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>性能优化</strong>：代码分割、懒加载等技术的应用
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>状态管理</strong>：Redux、Context API等被广泛使用
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-md-6 mb-4">
          <Card className="h-100 shadow">
            <Card.Header>🎨 交互/设计优点</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>视觉叙事</strong>：用视觉元素讲述科研故事
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>直观导航</strong>：清晰的目录结构和面包屑导航
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>色彩协调</strong>：符合iGEM和团队主题的色彩方案
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>动画效果</strong>：适度的动画增强用户体验
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>内容层次</strong>：信息结构清晰，重点突出
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <Card className="mb-4 shadow">
        <Card.Header>🔍 发现的不足之处</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <h5>技术方面</h5>
              <ul>
                <li>部分项目SEO优化不足</li>
                <li>移动端交互体验有待提升</li>
                <li>代码可维护性差异较大</li>
                <li>部分动画影响页面性能</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>设计方面</h5>
              <ul>
                <li>信息过载问题（部分页面）</li>
                <li>色彩对比度不够（可访问性问题）</li>
                <li>图标使用不一致</li>
                <li>加载状态反馈不足</li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
      
      <Card className="shadow">
        <Card.Header>💎 总结与启示</Card.Header>
        <Card.Body>
          <h5>对本次iGEM项目的启示：</h5>
          <ol>
            <li>
              <strong>技术选择</strong>：React框架成熟稳定，配合合适的数据可视化库
            </li>
            <li>
              <strong>设计原则</strong>：保持简洁，突出科学内容，确保可访问性
            </li>
            <li>
              <strong>性能优化</strong>：关注首次加载速度，优化图片和资源
            </li>
            <li>
              <strong>用户体验</strong>：清晰的导航，一致的交互，及时反馈
            </li>
            <li>
              <strong>创新点</strong>：在保证功能的基础上，加入适度的创新交互
            </li>
          </ol>
          <hr />
          <p className="mb-0 text-muted">
            <small>
              通过分析这些优秀项目，我们获得了宝贵的经验，可以为自己的iGEM Wiki开发提供参考。
            </small>
          </p >
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Task3;