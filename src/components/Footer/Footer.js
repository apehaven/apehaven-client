import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box, Button } from "../Core";
import share from "../../assets/image/svg/share-large.svg";
import twitter from "../../assets/image/svg/twitter-large.svg";
import reddit from "../../assets/image/svg/reddit-large.svg";
import instagram from "../../assets/image/svg/instagram.svg";
import facebook from "../../assets/image/svg/facebook.svg";
import twitch from "../../assets/image/svg/twitch.svg";

const TitleStyled = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 22px;
`;

const CopyRightArea = styled.div`
  p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: white !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const Footer = ({ isDark = true }) => {
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box bg="dark" style={{ paddingTop: 30 }}>
        <Container fluid>
          <Row className="align-items-center justify-content-center">
            <a href="https://t.me/ApeHaven" style={{ marginBottom: 15 }}>
              <img src={share} className="img-fluid" />
            </a>
            <div style={{ width: 15, height: 15 }} />
            <a href="https://twitter.com/ApeHaven" style={{ marginBottom: 15 }}>
              <img src={twitter} className="img-fluid" />
            </a>
            <div style={{ width: 15, height: 15 }} />
            <a href="https://www.reddit.com/r/ApeHaven/" style={{ marginBottom: 15 }}>
              <img src={reddit} className="img-fluid" />
            </a>
            <div style={{ width: 15 }} />
            <a href="https://www.instagram.com/apehaven/" style={{ marginBottom: 15 }}>
              <img src={instagram} className="img-fluid" />
            </a>
            <div style={{ width: 15 }} />
            <a href="https://www.facebook.com/ApeHaven" style={{ marginBottom: 15 }}>
              <img src={facebook} className="img-fluid" />
            </a>
            <div style={{ width: 15 }} />
            <a href="https://www.twitch.tv/apehaven" style={{ marginBottom: 15 }}>
              <img src={twitch} className="img-fluid" />
            </a>
          </Row>
          <Row style={{ padding: 50 }}>
            <Col lg={8} className="align-items-flex-start justify-content-flex-start">
              <Box
                css={`
              padding: 80px 0 60px;
            `}
              >
                <Row className="justify-content-flex-start align-items-flex-start">
                  <Col className="justify-content-flex-start align-items-flex-start">
                    <Row className="justify-content-flex-start">
                      <Col md={3} sm={6} xs={6}>
                        <div className="mb-5 mb-lg-4">
                          <a href="#why-apes">
                            <TitleStyled
                              variant="card"
                              color="white"
                            >
                              Why $APES
                            </TitleStyled>
                          </a>
                        </div>
                      </Col>
                      <Col md={3} sm={6} xs={6}>
                        <div className="mb-5 mb-lg-4">
                          <a href="#tokenomics">
                            <TitleStyled
                              variant="card"
                              color="white"
                            >
                              Tokenomics
                            </TitleStyled>
                          </a>
                        </div>
                      </Col>
                      <Col md={3} sm={6} xs={6}>
                        <div className="mb-5 mb-lg-4">
                          <a href="#where-we-donate">
                            <TitleStyled
                              variant="card"
                              color="white"
                            >
                              Where we donate
                            </TitleStyled>
                          </a>
                        </div>
                      </Col>
                      {/* <Col md={3} sm={6} xs={6}>
                        <div className="mb-5 mb-lg-4">
                          <a href="#how-to-buy">
                            <TitleStyled
                              variant="card"
                              color="white"
                            >
                              How to Buy
                            </TitleStyled>
                          </a>
                        </div>
                      </Col> */}
                    </Row>
                  </Col>
                </Row>
              </Box>
            </Col>
            <Col lg={3}>
              <CopyRightArea dark>
                <Row className="align-items-flex-start justify-content-flex-start">
                  <Col sm={8}>
                    <p>copyright &copy;apehaven | banana@apehaven.com</p>
                  </Col>
                  <Col sm={4}>
                    <a href="https://app.uniswap.org/#/swap?outputCurrency=0x14dd7ebe6cb084cb73ef377e115554d47dc9d61e" target="_blank" rel="noreferrer">
                      <Button style={{ maxHeight: 50 }} bg="primary">Buy $APES</Button>
                    </a>
                  </Col>
                </Row>
              </CopyRightArea>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
