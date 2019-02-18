import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";
import "./App.css";
import Container from "./components/Container";

const client = new ApolloClient({
  uri: "https://www.graphqlhub.com/graphql"
});

const GET_RETWEET_USER = gql`
  query($identity: UserIdentity!) {
    graphQLHub
    twitter {
      user(identifier: name, identity: $identity) {
        screen_name
        name
        profile_image_url
      }
    }
  }
`;

const GET_TWITTER_USER = gql`
  query($identity: UserIdentity!) {
    graphQLHub
    twitter {
      user(identifier: name, identity: $identity) {
        created_at
        description
        id
        screen_name
        name
        profile_image_url
        url
        tweets_count
        followers_count
        tweets(limit: 50) {
          text
          created_at
          user {
            screen_name
            name
            profile_image_url
          }
        }
      }
    }
  }
`;

class App extends Component {
  // Used the retweetsLoading variable to keep track of asynchronous loading = as far from best practice as physically possible...
  state = {
    data: null,
    retweetsScanned: false,
    retweetsLoading: 0,
    retweetCalled: false
  };

  componentDidMount() {
    this.loader();
  }

  loader() {
    client
      .query({
        query: GET_TWITTER_USER,
        variables: {
          identity: this.props.match.params.identity
        }
      })
      .then(result => {
        console.log(result.data);
        this.setState({ data: result.data });
      });
  }

  retweetScan() {
    const { tweets } = this.state.data.twitter.user;
    for (let i = 0; i < 49; i++) {
      if (tweets[i].text.substr(0, 4) == "RT @") {
        console.log(i, "wut");
        tweets[i].text.replace(/@[^\W]*/i, match => {
          this.setState({
            retweetsLoading: this.state.retweetsLoading + 1,
            retweetsScanned: true,
            retweetCalled: true
          });
          client
            .query({
              query: GET_RETWEET_USER,
              variables: {
                identity: match.substr(1)
              }
            })
            .then(result => {
              console.log(i, result.errors, result.data);
              this.setState({
                retweetsLoading: this.state.retweetsLoading - 1
              });
              this.setState(state => {
                state.data.twitter.user.tweets[i].user =
                  result.data.twitter.user;
                return state;
              });
            });
        });
      }
    }
  }

  render() {
    if (
      !this.state.retweetsScanned &&
      this.state.data &&
      !this.state.retweetCalled
    ) {
      this.retweetScan();
    }
    if (
      this.state.retweetsScanned &&
      this.state.data &&
      this.state.retweetsLoading <= 0
    ) {
      return <Container data={this.state.data} />;
    }
    return <p>Loading...</p>;
  }
}

export default App;
