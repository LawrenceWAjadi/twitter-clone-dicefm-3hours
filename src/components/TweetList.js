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
          <ProfileImageContainer>
            <ProfileImage key={tweet + i} src={tweet.user.profile_image_url} />
          </ProfileImageContainer>
          <TweetContents>
            <TweetMeta>
              <p>
                <strong>{tweet.user.name}</strong>&nbsp;&nbsp;
                <TweetScreenName>@{tweet.user.screen_name}</TweetScreenName>
                &nbsp;&nbsp;
                <TweetDate>{tweet.created_at.substr(4, 7)}</TweetDate>
              </p>
            </TweetMeta>
            <TweetTextContainer text={tweet.text} />
          </TweetContents>
        </TweetArea>
        <TweetSpacer />
      </>
    ));
  }
}

const TweetMeta = styled.div`
  display: flex-inline;
`;

const TweetArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const TweetScreenName = styled.span`
  color: rgb(128, 128, 128);
`;
const TweetContents = styled.div`
  padding: 10px;
  flex: 7;
`;

const ProfileImageContainer = styled.div`
  padding: 10px;
  flex: 1;
`;

const TweetText = styled.p``;

const TweetDate = styled.span`
  color: rgb(128, 128, 128);
`;

const TweetSpacer = styled.div`
  width: 100%;
  height: 0.5vh;
  display: block;
  background-color: rgb(248, 248, 248);
`;

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
