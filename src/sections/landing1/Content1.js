import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device, theme } from "../../utils";
import monkeyVidFake from "../../assets/image/png/monkey-vid-fake.png";
import imgL1FeatureCurve from "../../assets/image/png/swish.png";

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: -3px;
  left: -5px;
  width: calc(100vw + 10px);
  img {
    min-width: 100%;
  }
`;

// const BorderContainer = styled.div`
//   position: absolute;
//   width: 468px;
//   height: 263px;
//   right: -30px;
//   top: 30px;
//   border-radius: 10px;
//   overflow: hidden;
// `;
// const Border = styled.div`
//   width: 100%;
//   height: 100%;
  
//   box-sizing: border-box;
//   transform: rotate(-180deg);
//   border: 8px solid;
//   pointer-events: none;
//   border-image: linear-gradient(180deg, rgba(244, 217, 11, 1), rgba(244, 217, 11, 0.08) 50%) 30;
// `;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section className="position-relative">
      <ShapeBottmRight>
        <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
      </ShapeBottmRight>
      <Container>
        <Row className="align-items-center">
          <Col md="12" lg="6" className="order-lg-2">
            <div className="position-relative pl-lg-5">
              <div
                className="pl-lg-4 text-center text-lg-right"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <iframe
                  src="https://www.youtube.com/embed/2QkInwVfFJc?autoplay=1&mute=1&controls=0&loop=1&&playlist=2QkInwVfFJc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  loop
                  height="263"
                  width="468"
                  autoplay
                  style={{ borderRadius: 20 }}
                ></iframe>
                {/* <BorderContainer>
                  <Border />
                </BorderContainer> */}
              </div>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>The $APES need our help</Title>
                <Text mb={4}>
                  Real apes are traded among exotic animal collectors who
                  find they cannot properly care for their apes.
                  Ape sanctuaries rescue these apes and restore them to full health.
                  At ApeHaven, we leveraged automatic-yield-generating technology
                  with a charitable mission. 1% of each transaction of $APES
                  token is donated to the Center for Great Apes and other
                  wildlife sanctuaries.
                </Text>
                  
                <a
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x14dd7ebe6cb084cb73ef377e115554d47dc9d61e"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button mt={3} bg="secondary" style={{ marginRight: theme.space[3] }}>Buy on UniSwap</Button>
                </a>
                <a
                  href="/apehaven.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button mt={3}>Whitepaper</Button>
                </a>
                <a
                  href="https://t.me/ApeHaven"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button mt={3} bg="purpleDark">Join the Telegram</Button>
                </a>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
