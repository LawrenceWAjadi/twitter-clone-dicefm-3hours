import React, { Component } from "react";
import styled from "styled-components";

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
        <ProfileBox />
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
  height: 100px;
`;

const TweetContainer = styled.div`
  flex: 2;
  background-color: white;
  padding: 1vw 1vw;
`;

export default Container;
