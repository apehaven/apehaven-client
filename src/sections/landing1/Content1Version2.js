import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device, theme } from "../../utils";
import ape2Image from "../../assets/image/png/ape-2.png";
import imgL1FeatureCurve from "../../assets/image/png/swish.png";
import cfga from "../../assets/image/svg/cfga.svg";

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: 0px;
  left: -5px;
  width: calc(100vw + 10px);
  img {
    min-width: 100%;
  }
`;

const Logo = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 100px;
`;
const Border = styled.div`
  position: absolute;
  width: 94%;
  height: 100%;
  left: 60px;
  top: 30px;
  
  border: 10px solid ${({ theme }) => theme.colors.yellow};
  box-sizing: border-box;
  border-radius: 30px;
  transform: rotate(-180deg);
`;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section className="position-relative" bg="secondary">
      <ShapeBottmRight>
        <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
      </ShapeBottmRight>
      <Container>
        <Row className="align-items-center">
          <Col md="12" lg="6" className="order-lg-2">
            <div className="position-relative">
              <div
                className="pl-lg-4 text-center text-lg-right"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={ape2Image} alt="" className="img-fluid" />
                <Logo src={cfga} alt="" className="img-fluid" />
              </div>
              <Border />
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title color="white">Where we Donate</Title>
                <Text mb={4} color="white">
                  We are currently supporting the Center for Great Apes.
                  By simply transacting $APES tokens,
                  you support the ape sanctuary without making a direct donation.
                </Text>
                  
                <a href="https://centerforgreatapes.org/" target="_blank" rel="noreferrer">
                  <Button mt={3} bg="purpleDark">Where we donate</Button>
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
