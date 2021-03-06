import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { theme } from "../../utils";

import banana from "../../assets/image/svg/banana.svg";
import database from "../../assets/image/svg/database.svg";
import cashMoney from "../../assets/image/svg/cash-money.svg";
import dollar from "../../assets/image/svg/dollar.svg";

const FeatureCard = ({
  color = "primary",
  image,
  title,
  children,
  ...rest
}) => (
  <Box width={"100%"} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-flex-start align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
        css={`
          background-color: ${({ theme, color }) =>
            rgba(theme.colors[color], 0.1)};
        `}
      >
        <div style={{ height: 60, width: 60, borderRadius: 60 / 2, display: 'flex', backgroundColor: theme.colors.yellow, justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={image}
            style={{ width: 30, height: 30 }}
          />
        </div>
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={500}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const Feature = () => (
  <>
    <Section bg="purpleDark">
      <Container>
        <Row className="align-items-center">
          <Col
            md="8"
            lg="6"
            className="offset-lg-1 pl-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Box>
              <Title color="light">Tokenomics</Title>
              <Text color="light" opacity={0.7}>
                We are here for the $APES! 1% of each transaction goes directly to the
                Center for Great Apes. Help us support their vital mission and
                buy $APES.
              </Text>
              <a
                href="https://www.dextools.io/app/uniswap/pair-explorer/0xf431bbfff6334e19ebf7ed76dde0a17b76271b9b"
                target="_blank"
                rel="noreferrer"
              >
                <Button mt={4} color="purpleDark" bg="yellow">
                  View Chart
                </Button>
              </a>
            </Box>
          </Col>
          <Col md="8" lg="5" className="order-lg-1 mt-5 mt-lg-0">
            <div>
              <Row className="justify-content-center">
                <Col
                  md="12"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard title="Original Supply" image={banana}>
                    1,000,000,000
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard title="10% tax on transactions" image={database}>
                    7% token strength
                    <br />
                    2% reflection to holders
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard title="HODL to Save The Apes" image={cashMoney}>
                    We automatically distribute tokens to holders who benefit
                    simply by holding tokens in their wallets
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard title="conservation wallet" image={dollar}>
                    1% conservation/charity wallet
                  </FeatureCard>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
