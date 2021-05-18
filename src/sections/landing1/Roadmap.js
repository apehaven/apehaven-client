import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';

import {
    Box,
    Section, Text, Title,
} from "../../components/Core";
import {device} from "../../utils";

import roadmapSvg from '../../assets/image/svg/roadmap.svg';

const Img = styled.img`
  display: none;
  @media ${device.lg} {
    display: inline-block;
  }
`

const Card = ({
  date,
  children,
 ...rest
}) => (
  <Box bg="light" p="50px" borderRadius={30} {...rest}>
    <div>
      <Text
        color="heading"
        as="h3"
        fontSize={"30px"}
        fontWeight={700}
        letterSpacing={1}
        mb={2}
      >
        {date}
      </Text>
      <Text fontSize={"18px"} lineHeight={2}>
        {children}
      </Text>
    </div>
  </Box>
);

const Roadmap = () => (
  <>
    {/* <!-- Roadmap section --> */}
    <Section bg="yellow">
      <Container>
        <Row className="align-items-flex-start justify-content-space-between">
          <Col
            lg="6"
            md="12"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Box>
              <Title color="light">Roadmap</Title>
              <Text color="light">
                It takes $22,000 to take care of one Ape at the Center for Great Apes.
                They house 60 Apes and are expecting 14 more in the fall.
                We want to do as much as we can to help them save the $APES.
                We are diligently working on NFTs and merch to continue to keep things exciting.
              </Text>
            </Box>
          </Col>
          <Col lg="1" className="d-flex align-items-center justify-center text-center">
            <Img src={roadmapSvg} />
          </Col>
          <Col lg="5" className="mt-5 mt-lg-0">
            <Row>
              <Col
                md="12"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="50"
              >
                <Card date="April 2021:">
                  🦍 $APES Launch
                  <br />
                  💸 First Donation
                  <br />
                  🎥 Influencer Marketing
                  <br />
                  📶 Etherscan Registration
                </Card>
              </Col>
              <Col
                md="12"
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="50"
              >
                <Card date="May 2021:">
                  ❓ Community AMA
                  <br />
                  🏅 Community contests
                  <br />
                  🦎 Coingecko listing
                  <br />
                  📄 CMC listing
                  <br />
                  🦍 Ape Rolling Thunder NFT's Auction
                  <br />
                  🖥️ Website improvements
                  <br />
                  🐵 Partnerships with additional ape & wildlife sanctuaries
                  <br />
                  💵 More donations (including in-person donations)
                  <br />
                  👕 Merch
                  <br />
                  📱 Community livestreams
                  <br />
                  🤳 Big cameos and gorilla marketing
                  <br />
                  💁 More influencer partnerships
                  <br />
                  📈 Announcement of strategic partners
                </Card>
              </Col>
              <Col
                md="12"
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="50"
              >
                <Card date="June 2021:">
                  🦍 Adopt an ape
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Roadmap;
