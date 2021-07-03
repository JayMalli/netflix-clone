import styled from "styled-components";
import bgImg from "../images/misc/home-bg.jpg";
import smallBg from "../images/misc/home-bg_small.jpg";
const StyledNavbar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-image: url(${smallBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default StyledNavbar;
