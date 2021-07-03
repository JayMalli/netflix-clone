import styled from "styled-components";

const StyledMovie = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => (props.img ? props.img : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export default StyledMovie;
