import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import avatar from '../../assets/image/png/ape-avatar.png';
import { device } from "../../utils";

const Card = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 800px;

  background: #FFFFFF;
  box-shadow: 4px 6px 20px 6px rgba(0, 0, 0, 0.09);
  border-radius: 30px;

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
    padding: 35px;
    height: 160px;
  }
`;

const Avatar = styled.img`
  height: 60px;
  width: 53px;
  border-radius: 30px;
  margin-right: 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 10px;
  @media ${device.md} {
    margin-right: 30px;
  }
`;

const Type = styled.div`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  /* or 163% */
  letter-spacing: 1px;
  
  color: #878787;
`;

const TypeRight = styled(Type)`
  align-self: flex-end;
  margin-top: 10px;
`;

const Title = styled.div`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 33px;
  /* or 143% */
  letter-spacing: 1px;
  
  color: #443D4F;
`;

const Raised = styled.div`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  line-height: 33px;
  text-align: right;
  letter-spacing: 1px;
  
  color: #443D4F;
`;

const RaisedCard = ({ raised }) => (
  <Card>
    <Avatar src={avatar} className="img-fluid" />
    <Column>
      <Type>Fundraising</Type>
      <Title>Center for Great Apes</Title>
    </Column>
    <Column>
      <Raised>{raised}</Raised>
      <TypeRight>RAISED</TypeRight>
    </Column>
  </Card>
);

RaisedCard.propTypes = {
  raised: PropTypes.string,
};

RaisedCard.defaultProps = {
  raised: '$18,229',
};

export default RaisedCard;
