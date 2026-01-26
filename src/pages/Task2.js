import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';

function Task2() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">🏗️ 任务二：技术架构分析</h1>
      
      <Card className="mb-4 shadow">
        <Card.Header>系统架构图</Card.Header>
        <Card.Body>
          <p className="text-muted mb-3">
            以下为系统架构分析图：
          </p >
          
          <Image 
            src={process.env.PUBLIC_URL + "/images/task2-architecture.jpg"} 
            alt="系统架构图" 
            fluid 
            thumbnail
            className="border"
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Task2;