import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10px;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 20px);
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const AvatarUser = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmount = styled.span`
  font-size: 18px;
  font-weight: blod;
  background: linear-gradient(
    86.88deg,
    #7d63ff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Username = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #333;
`;
const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=752x"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <AvatarUser
              src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=752x"
              alt=""
            />
            <Username>ThaoNgan</Username>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspactive</CardTitle>
          <CardAmount>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
