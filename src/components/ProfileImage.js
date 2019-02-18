import styled from "styled-components";

const ProfileImage = styled.img`
  background-image: url("${props => props.src}");
  border-radius: 50% 50% 50% 50%;
  background-size: cover;
  width: 10%;
  margin-left: 0.5vw;
  margin-top: 0.5vw;
  display: block;
`;

export default ProfileImage;
