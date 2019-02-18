import styled from "styled-components";

const ProfileImage = styled.img`
  background-image: url("${props => props.src}");
  border-radius: 50% 50% 50% 50%;
  background-size: cover;
  width: 100px;
`;

export default ProfileImage;
