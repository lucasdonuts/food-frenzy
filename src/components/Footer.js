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
              <GoMarkGithub className="footer-icon m-2" />
              lucasdonuts
            </Col>
            <Col>
              <GoMarkGithub className="footer-icon m-2" />
              aiodell
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer;