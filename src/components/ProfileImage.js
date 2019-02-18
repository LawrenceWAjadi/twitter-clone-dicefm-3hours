import styled from "styled-components";

const ProfileImage = styled.img`
  background-image: url("${props => props.src}");
  border-radius: 50% 50% 50% 50%;
  flex: 1;
  background-size: cover;
  width: 100%;
  display: block;
`;

export default ProfileImage;
