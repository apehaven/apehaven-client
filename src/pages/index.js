import React from "react";
import dynamic from "next/dynamic";

import PageWrapper from "../components/PageWrapper";
import Landing from "../sections/landing4/Hero";
import WhyApes from "../sections/landing1/Content1";
const Tokenomics = dynamic(() => import("../sections/landing2/Feature1"));
const Roadmap = dynamic(() => import("../sections/landing1/Roadmap"));
const WhereWeDonate = dynamic(() =>
  import("../sections/landing1/Content1Version2")
);

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
        <div id="where-we-donate">
          <WhereWeDonate />
        </div>
      </PageWrapper>
    </>
  );
};
export default LandingPage4;
