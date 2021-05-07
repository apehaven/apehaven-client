import React from "react";
import Link from "next/link";
import styled from "styled-components";

import imgL1Logo from "../../assets/image/png/l1-logo.png";
import imgL1LogoWhite from "../../assets/image/png/logo-white.png";

import { device } from "../../utils";

const Logo = ({ white, height, className = "", ...rest }) => {
  const Img = styled.img`
    height: 40px;
    @media ${device.lg} {
      height: 60px;
    }
  `;

  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <Img src={imgL1LogoWhite}  alt="" />
        ) : (
          <img src={imgL1Logo} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
