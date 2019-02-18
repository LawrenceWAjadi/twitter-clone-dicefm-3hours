import React, { Component } from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";

// import ProfileBox from "./ProfileBox";
import TweetList from "./TweetList";

class Container extends Component {
  render() {
    const {
      created_at,
      description,
      id,
      screen_name,
      name,
      profile_image_url,
      url,
      tweets_count,
      followers_count,
      tweets
    } = this.props.data.twitter.user;

    return (
      <div className="container">
        <ProfileBox>
          <CoverImage />
          <ProfileImageContainerMain>
            <ProfileImage src={profile_image_url} />
          </ProfileImageContainerMain>
          <ProfileInfoContainer>
            <ProfileName>{name}</ProfileName>
            <ProfileScreenName>@{screen_name}</ProfileScreenName>
          </ProfileInfoContainer>
        </ProfileBox>
        <TweetContainer>
          <TweetList tweets={tweets} />
        </TweetContainer>
      </div>
    );
  }
}

const ProfileBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 1vw 1vw;
  height: 33vh;
  position: relative;
`;

const ProfileInfoContainer = styled.div`
width: 60%
padding-right: 10px;
padding-top: 10px;
position: absolute;
top: 13vh;
left: 40%;
`;

const ProfileName = styled.h2`
  margin-bottom: 5px;
`;

const ProfileScreenName = styled.h3`
  color: rgb(128, 128, 128);
  margin-top: 5px;
`;

const ProfileImageContainerMain = styled.div`
  width: 30%;
  padding-left: 10px;
  padding-top: 10px;
  position: absolute;
  z-index: 1000;
  top: 10vh;
  left: 5%;
`;

const TweetContainer = styled.div`
  flex: 2;
  background-color: white;
  padding: 1vw 1vw;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 12vh;
  padding-top: 0px;
  margin-top: 0px;
  background: url("https://dice.fm/assets/img/og-image-2017.jpg");
  background-size: contain;
`;

export default Container;
