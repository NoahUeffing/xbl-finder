import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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
    var searchResult = res.data.filter((item) =>
      item.Gamertag.toUpperCase().includes(text.toUpperCase())
    );
    this.setState({ users: searchResult, loading: false });
  };

  // Show all friends
  showAllFriends = async () => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/friends`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    this.setState({ users: res.data, loading: false });
  };

  // Clear friends results

  clearFriends = () => this.setState({ users: [], loading: false });

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    // TODO: change this to have an x button instead of timeout
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchFriends={this.searchFriends}
            showAllFriends={this.showAllFriends}
            clearFriends={this.clearFriends}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;

export { App };
