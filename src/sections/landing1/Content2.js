import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";

import { Title, Section, Box, Text, Button } from "../../components/Core";
import { device } from "../../utils";

import developerImage from "../../assets/image/png/developer.png";

const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    width={360}
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex ${className}`}
    {...rest}
    css={`
      min-width: 100%;
      width: 100%;
      @media ${device.sm} {
        width: 360px;
        min-width: 360px;
      }
    `}
  >
    <Box
      size={55}
      minWidth={55}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
      mr={3}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Title variant="card" mb={0}>
        {title}
      </Title>

      <Text>{children}</Text>
    </div>
  </Box>
);

const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 30px;
  top: 30px;
  
  border: 10px solid #6308F7;
  box-sizing: border-box;
  border-radius: 30px;
  transform: rotate(-180deg);
`;

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section bg="#f7f7fb" className="position-relative">
      <Container>
        <Row className="align-items-flex-start justify-content-space-between">
          <Col lg="5" md="9" sm="12" className="mb-5 mb-lg-0">
            <div className="position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={developerImage} alt="" className="img-fluid" />
              </div>
              <Border />
            </div>
          </Col>
          <Col lg="7">
            <div
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div className="content-text pl-lg--50">
                <div className="section-title pl-lg-5">
                  <Title style={{ color: '#443D4F' }}>meet the developer</Title>
                  <Text mb={4} style={{ color: '#878787' }}>
                    Drew Roberts grew up on a farm in Kentucky and began
                    programming games in middle school on a TI-83 calculator
                    with friends at Louisville Collegiate School. He graduated
                    from Trinity Preparatory School in Winter Park, Florida, and
                    college at Samford University in Birmingham, Alabama..
                  </Text>
                  <Text mb={4} style={{ color: '#878787' }}>
                    After driving to Costa Rica, he eventually returned to Orlando and
                    continued his interest in code through a family insurance
                    agency, a college football website, an escape room company,
                    and recently in the cryptocurrency space. He is fascinated
                    by tokenomics and rallying a community to donate a portion
                    of their transaction fees to great nonprofit organizations.
                  </Text>
                  <Text style={{ color: '#878787' }}>Connect with Drew Roberts on</Text>
                  <Row ml={15}>
                    <Col sm={12}>
                      <a
                        href="https://twitter.com/drewroberts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button mt={3} mr={3} bg="primary">
                          Twitter
                        </Button>
                      </a>
                      <a
                        href="https://facebook.com/drewroberts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button mt={3} mr={3} bg="secondary">
                          Facebook
                        </Button>
                      </a>
                    </Col>
                    <Col sm={12}>
                      <a
                        href="https://linkedin.com/in/drewroberts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button mt={3} mr={3} bg="secondary">
                          LinkedIn
                        </Button>
                      </a>
                      <a
                        href="https://github.com/drewroberts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button mt={3} mr={3} bg="primary">
                          GitHub
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
