import styled from "styled-components";
import largeBg from "../images/misc/joker1.jpg";
import smallBg from "../images/misc/joker1_mobile.jpg";
const StyledBrowse = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${largeBg});
  background-size: 100% 100%;
  background-position: center;
  @media screen and (max-width: 768px) {
    background: url(${smallBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export default StyledBrowse;
