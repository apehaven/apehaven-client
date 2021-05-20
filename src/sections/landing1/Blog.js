import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {Box, Section} from "../../components/Core";

import BlogList from "../blog/BlogListSidebar";
import Sidebar from "../blog/Sidebar";
import imgL1FeatureCurve from "../../assets/image/svg/swish-bottom-black.svg";
import styled from "styled-components";

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: -3px;
  left: -5px;
  width: calc(100vw + 10px);
  img {
    min-width: 100%;
  }
`;

const Blog = () => (
  <>
    <Section bg="#f7f7fb" className="position-relative">
      <ShapeBottmRight>
        <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
      </ShapeBottmRight>
      <Container>
        <Row>
          <Col
            lg="8"
            className="mb-5"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <BlogList />
          </Col>
          <Col
            lg="4"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)
export default Blog;
