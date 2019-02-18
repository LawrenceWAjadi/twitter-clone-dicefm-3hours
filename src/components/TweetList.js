import React, { Component } from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage.js";

export default class TweetList extends Component {
  componentDidMount() {}

  render() {
    return this.props.tweets.map((tweet, i) => (
      <>
        <ProfileImage key={tweet + i} src={tweet.user.profile_image_url} />
        <TweetMeta>
          <p>
            <em>{tweet.user.name}</em>
            <br />
            {tweet.user.screen_name}
            <br />
            {tweet.created_at.substr(4, 7)}
          </p>
        </TweetMeta>
        <TweetText>{tweet.text}</TweetText>
      </>
    ));
  }
}

const TweetMeta = styled.div`
  display: flex-inline;
`;

const TweetText = styled.p``;
