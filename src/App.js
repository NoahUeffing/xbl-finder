import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/friends`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    this.setState({ users: res.data, loading: false });
    this.baseState = this.State;
  }

  // Search Xbox Live Friends List

  searchFriends = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/friends`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    var result = res.data.filter((item) => item.Gamertag === text);
    this.setState({ users: result, loading: false });
  };

  async resetFriends() {
    this.setState({ loading: true });
    this.setState(this.baseState);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchFriends={this.searchFriends} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
