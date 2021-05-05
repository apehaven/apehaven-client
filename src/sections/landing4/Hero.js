import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device, theme } from "../../utils";
import imgHeroTab from "../../assets/image/jpeg/ape-bg.jpg";
import chartSvg from "../../assets/image/svg/chart-pie.svg";
import RaisedCard from "../../components/RaisedCard/RaisedCard";

const SectionStyled = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ImgRight = styled(Box)`
  position: relative;
  left: -100px;
  max-width: 100%;
  min-width: 100%;
  @media ${device.lg} {
    position: absolute;
    top: -85px;
    max-width: 140%;
    min-width: 140%;
    right: 0;
    left: auto;
    transform: translateX(25%);
  }
`;

const RaisedCardContainer = styled.div`
  position: relative;
  bottom: 0;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  @media ${device.md} {
    position: absolute;
    bottom: -60px;
    z-index: 3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
  }
`;

const Hero = () => {
  return (
    <>
      <SectionStyled className="position-relative">
        <div className="pt-5"></div>
        <Container>
          <Row className="justify-content-center align-items-center position-relative">
            <Col md="5" className="order-md-2 position-static">
              <ImgRight>
                <img
                  src={imgHeroTab}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-delay="1000"
                  data-aos-once="true"
                />
              </ImgRight>
            </Col>
            <Col md="7" className="order-md-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero" color="light">
                    Going Bananas <br className="d-none d-sm-block" />
                    for the $APES
                  </Title>
                  <Text mb={4} color="light" opacity={0.7}>
                    A conservation oriented token providing a haven for $APES.
                  </Text>
                  <div className="d-flex flex-column align-items-start pt-3">
                    <div className="d-flex flex-row">
                      <a href="https://app.uniswap.org/#/swap?outputCurrency=0x14dd7ebe6cb084cb73ef377e115554d47dc9d61e" target="_blank" rel="noreferrer">
                        <Button mb={2} color="black" bg="yellow">Buy on UniSwap</Button>
                      </a>
                      <a href="https://t.me/ApeHaven" target="_blank" rel="noreferrer">
                        <Button mb={2} bg="secondary" style={{ marginLeft: theme.space[3] }}>Join the Telegram</Button>
                      </a>
                    </div>
                    <div className="d-flex flex-row" style={{ marginTop: theme.space[3] }}>
                      <img src={chartSvg} className="img-fluid" style={{ marginRight: theme.space[3] }} />
                      <Text
                        variant="small"
                        fontSize={"14px"}
                        color="light"
                        opacity={0.7}
                      >
                        View Chart
                    </Text>
                    </div>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
        <RaisedCardContainer>
          <RaisedCard />
        </RaisedCardContainer>
      </SectionStyled>
    </>
  );
};

export default Hero;
