import React, { Component } from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage.js";
import reactStringReplace from "react-string-replace";

export default class TweetList extends Component {
  componentDidMount() {}

  render() {
    return this.props.tweets.map((tweet, i) => (
      <>
        <TweetArea>
          <ProfileImage key={tweet + i} src={tweet.user.profile_image_url} />
          <TweetMeta>
            <p>
              <strong>{tweet.user.name}</strong>&nbsp;{tweet.user.screen_name}
              &nbsp;
              {tweet.created_at.substr(4, 7)}
            </p>
          </TweetMeta>
          <TweetTextContainer text={tweet.text} />
        </TweetArea>
        <TweetSpacer />
      </>
    ));
  }
}

const TweetMeta = styled.div`
  display: flex-inline;
`;

const TweetText = styled.p``;

const TweetSpacer = styled.div`
  width: 100%;
  height: 0.5vh;
  display: block;
  background-color: rgb(248, 248, 248);
`;

const TweetArea = styled.div``;

const TweetTextContainer = ({ text }) => {
  return (
    <TweetText>
      {reactStringReplace(text, /(@[^\W]*)/gi, (match, i) => (
        <a key={match + i} href={`https://twitter.com/${match.substr(1)}`}>
          {match}
        </a>
      ))}
    </TweetText>
  );
};
