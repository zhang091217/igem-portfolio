import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>iGEM 2026 JLU-CP</h5>
            <p>吉林大学iGEM团队第二轮考核 Wiki任务展示</p >
          </Col>
          <Col md={4}>
            <h5>相关链接</h5>
            <ul className="list-unstyled">
              <li><a href=" " className="text-light">iGEM官方网站</a ></li>
              <li><a href="https://gitlab.igem.org" className="text-light">iGEM GitLab</a ></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>开发信息</h5>
            <p>
              <small>
                基于React框架开发<br />
                部署于GitHub Pages<br />
                提交日期：2026年1月
              </small>
            </p >
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <small>© 2026 JLU-CP Team | 用于iGEM第二轮考核</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;