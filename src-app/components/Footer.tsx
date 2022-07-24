import React from 'react';
import { CrawlerColors } from '../../lib/const';
import { Container, Row, Col } from 'react-bootstrap';

const stickyFooterStyle = {
  backgroundColor: CrawlerColors.crawler_light_black,
  fontSize: '13px',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '35px',
  width: '100%',
  marginTop: '-5px',
};

const Footer = (): React.ReactElement => {
  {
    return (
      <Container>
        <Row>
          <Col style={stickyFooterStyle} sm={12}>
            © 2022 - {new Date(Date.now()).getUTCFullYear()} •{' '}
            <a href="https://github.com/neppi/data-crawler" target="_blank" rel="noopener nonreferrer noreferrer">
              Data Crawler
            </a>{' '}
            •{' '}
            <a href="mailto://jens.haupt.eu@gmail.com" target="_blank" rel="noopener nonreferrer noreferrer">
              @neptuntriton
            </a>{' '}
            •{' '}
            <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener nonreferrer noreferrer">
              GPL-3.0
            </a>{' '}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Footer;
