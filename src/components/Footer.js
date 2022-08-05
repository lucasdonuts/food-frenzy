import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <a href="https://github.com/lucasdonuts" target="_blank" rel="noreferrer">
                <GoMarkGithub className="footer-icon m-2" />
                lucasdonuts
              </a>
            </Col>
            <Col>
              <a href="https://github.com/aiodell" target="_blank" rel="noreferrer">
                <GoMarkGithub className="footer-icon m-2" />
                aiodell
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer;