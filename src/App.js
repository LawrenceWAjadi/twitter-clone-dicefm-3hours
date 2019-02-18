import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";
import "./App.css";
import Container from "./components/Container";

const client = new ApolloClient({
  uri: "https://www.graphqlhub.com/graphql"
});

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
  state = {
    data: null
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

  render() {
    return this.state.data ? (
      <Container data={this.state.data} />
    ) : (
      <p>Loading...</p>
    );
  }
}

export default App;
