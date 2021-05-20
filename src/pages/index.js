import React from "react";
import Landing from "../sections/landing4/Hero";
import WhyApes from "../sections/landing1/Content1";
import Tokenomics from "../sections/landing2/Feature1";
import MeetTheDeveloper from "../sections/landing1/Content2";
import WhereWeDonate from "../sections/landing1/Content1Version2";
import Blog from "../sections/landing1/Blog";
import Roadmap from "../sections/landing1/Roadmap";
import PageWrapper from "../components/PageWrapper";

const LandingPage4 = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <div id="landing">
          <Landing />
        </div>
        <div id="why-apes">
          <WhyApes />
        </div>
        <div id="tokenomics">
          <Tokenomics />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="meet-the-developer">
          <MeetTheDeveloper />
        </div>
        <div id="where-we-donate">
          <WhereWeDonate />
        </div>
        <div id="blog">
          <Blog />
        </div>
        {/* <div id="how-to-buy">
          <FAQ />
        </div> */}
      </PageWrapper>
    </>
  );
};
export default LandingPage4;
