import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, Span } from "../components/Core";
import { theme } from "../utils";
import imgL1FeatureCurve from "../assets/image/svg/swish-bottom.svg";

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: 0px;
  left: -5px;
  width: calc(100vw + 10px);
  background-color: ${({ theme }) => theme.colors.dark};
  img {
    min-width: 100%;
  }
`;

const NavStyled = styled(Nav)`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #f7f7fb;
  padding-top: 15px;
  padding-bottom: 15px;
  color: white;
  a {
    color: white !important;
    &:hover,
    &:active,
    &:visited {
      color: ${({ theme }) => theme.colors.purpleLight} !important;
    }
  }
`;

const Faq = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="position-relative" style={{ padding: 0, margin: 0 }}>
          <Section className="pb-0" bg="purpleDark">
            <div className="pt-5"></div>
            <Container bg="purpleDark">
              <Row className="justify-content-center text-center">
                <Col lg="9">
                  <Title variant="hero" color="white">Frequently Asked Question</Title>
                  <Text color="purpleLight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                </Text>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section bg="purpleDark">
            <Container>
              <Tab.Container id="left-tabs-example" defaultActiveKey="general">
                <Row>
                  <Col md="4" className="mb-5 mb-md-0">
                    <NavStyled
                      className="flex-column mr-md-5"
                      style={{ backgroundColor: theme.colors.purpleDark, borderWidth: 0 }}
                    >
                      <Nav.Link eventKey="general">General</Nav.Link>
                      {/* <Nav.Link eventKey="accounts">Buying</Nav.Link>
                      <Nav.Link eventKey="sales">Education</Nav.Link>
                      <Nav.Link eventKey="support">Conservation</Nav.Link>
                      <Nav.Link eventKey="license">Donations</Nav.Link>
                      <Nav.Link eventKey="license">Concernes</Nav.Link> */}
                    </NavStyled>
                  </Col>
                  <Col md="8">
                    <Tab.Content>
                      <Tab.Pane eventKey="general">
                        <Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px" color="white">
                              What is $APES coins?
                          </Title>
                            <Text variant="small" color="purpleLight">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam
                          </Text>
                          </Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px" color="white">
                              what is the official token id?
                          </Title>
                            <Text color="white" variant="small" color="purpleLight">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam
                          </Text>
                          </Box>
                        </Box>
                      </Tab.Pane>
                      <Tab.Pane eventKey="accounts">
                        <Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px">
                              Does it work with WordPress?
                          </Title>
                            <Text variant="small">
                              Create custom landing pages with Omega that converts
                              more visitors than any website. With lots of unique
                              blocks, you can easily build a page without any
                              design or custom coding. with Omega that converts
                              more visitors than any website.
                          </Text>
                          </Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px">
                              What is your Privacy Policy?
                          </Title>
                            <Text variant="small">
                              Create custom landing pages with Omega that converts
                              more visitors than any website. With lots of unique
                              blocks, you can easily build a page without any
                              design or custom coding. with Omega that converts
                              more visitors than any website.
                          </Text>
                          </Box>

                          <Box mb={4}>
                            Didn’t find your answer?{" "}
                            <a href="/">
                              <Span color="primary">Contact us here</Span>
                            </a>
                          </Box>
                        </Box>
                      </Tab.Pane>
                      <Tab.Pane eventKey="sales">
                        <Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px">
                              How many sales?
                          </Title>
                            <Text variant="small">
                              Create custom landing pages with Omega that converts
                              more visitors than any website. With lots of unique
                              blocks, you can easily build a page without any
                              design or custom coding. with Omega that converts
                              more visitors than any website.
                          </Text>
                          </Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px">
                              What is your Privacy Policy?
                          </Title>
                            <Text variant="small">
                              Create custom landing pages with Omega that converts
                              more visitors than any website. With lots of unique
                              blocks, you can easily build a page without any
                              design or custom coding. with Omega that converts
                              more visitors than any website.
                          </Text>
                          </Box>

                          <Box mb={4}>
                            Didn’t find your answer?{" "}
                            <a href="/">
                              <Span color="primary">Contact us here</Span>
                            </a>
                          </Box>
                        </Box>
                      </Tab.Pane>
                      <Tab.Pane eventKey="support">
                        <Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px">
                              How long you support us?
                          </Title>
                            <Text variant="small">
                              Create custom landing pages with Omega that converts
                              more visitors than any website. With lots of unique
                              blocks, you can easily build a page without any
                              design or custom coding. with Omega that converts
                              more visitors than any website.
                          </Text>
                          </Box>

                          <Box mb={4}>
                            Didn’t find your answer?{" "}
                            <a href="/">
                              <Span color="primary">Contact us here</Span>
                            </a>
                          </Box>
                        </Box>
                      </Tab.Pane>
                      <Tab.Pane eventKey="license">
                        <Box>
                          <Box mb={4}>
                            <Title variant="card" mb={3} fontSize="24px">
                              Do you have any MIT licensed version?
                          </Title>
                            <Text variant="small">
                              Create custom landing pages with Omega that converts
                              more visitors than any website. With lots of unique
                              blocks, you can easily build a page without any
                              design or custom coding. with Omega that converts
                              more visitors than any website.
                          </Text>
                          </Box>

                          <Box mb={4}>
                            Didn’t find your answer?{" "}
                            <a href="/">
                              <Span color="primary">Contact us here</Span>
                            </a>
                          </Box>
                        </Box>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Container>
          </Section>
          <ShapeBottmRight>
            <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
          </ShapeBottmRight>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Faq;
