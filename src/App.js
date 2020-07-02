import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import GameSearch from "./components/games/GameSearch";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import MyInfo from "./components/pages/MyInfo";
import MyXbox360Games from "./components/pages/MyXbox360Games";
import MyXboxOneGames from "./components/pages/MyXboxOneGames";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    myInfo: [],
    newProfile: [],
    xboxOneGames: [],
    xbox360Games: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const friends = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/friends`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    const selfInfo = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/gamercard`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    const selfProfile = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/new-profile`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    const xboxOne = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/xboxonegames`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    const xbox360 = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/xbox360games`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );

    this.setState({
      users: friends.data,
      myInfo: selfInfo.data,
      loading: false,
      newProfile: selfProfile.data,
      xboxOneGames: xboxOne.data.titles,
      xbox360Games: xbox360.data.titles,
    });
  }

  getMyInfo = async () => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/gamercard`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    this.setState({ myInfo: res.data, loading: false });
  };

  getNewProfile = async () => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/new-profile`,
      {
        headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
      }
    );
    this.setState({ newProfile: res.data, loading: false });
  };

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

  searchGames = async (text) => {
    this.setState({ loading: true });
    if (window.location.href.includes("myXboxOneGames")) {
      const res = await axios.get(
        `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/xboxonegames`,
        {
          headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
        }
      );
      var oneResult = res.data.titles.filter((item) =>
        item.name.toUpperCase().includes(text.toUpperCase())
      );
      this.setState({ xboxOneGames: oneResult, loading: false });
    }
    if (window.location.href.includes("myXbox360Games")) {
      const res = await axios.get(
        `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/xbox360games`,
        {
          headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
        }
      );
      var xbox360Result = res.data.titles.filter((item) =>
        item.name.toUpperCase().includes(text.toUpperCase())
      );
      this.setState({ xbox360Games: xbox360Result, loading: false });
    }
  };

  // Show all friends
  showAllGames = async () => {
    this.setState({ loading: true });

    if (window.location.href.includes("myXboxOneGames")) {
      const res = await axios.get(
        `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/xboxonegames`,
        {
          headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
        }
      );
      this.setState({ xboxOneGames: res.data.titles, loading: false });
    }
    if (window.location.href.includes("myXbox360Games")) {
      const res = await axios.get(
        `https://xapi.us/v2/${process.env.REACT_APP_XAPI_USER_ID}/xbox360games`,
        {
          headers: { "X-Auth": `${process.env.REACT_APP_XAPI_KEY}` },
        }
      );
      this.setState({ xbox360Games: res.data.titles, loading: false });
    }
  };

  // Clear friends results

  clearGames = () => {
    if (window.location.href.includes("myXboxOneGames")) {
      this.setState({ xboxOneGames: [], loading: false });
    }
    if (window.location.href.includes("myXbox360Games")) {
      this.setState({ xbox360Games: [], loading: false });
    }
  };

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    // TODO: change this to have an x button instead of timeout
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const {
      users,
      loading,
      myInfo,
      newProfile,
      xboxOneGames,
      xbox360Games,
    } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchFriends={this.searchFriends}
                      showAllFriends={this.showAllFriends}
                      clearFriends={this.clearFriends}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/myInfo"
                render={(props) => (
                  <MyInfo
                    loading={loading}
                    myInfo={myInfo}
                    newProfile={newProfile}
                  />
                )}
              />
              <Route
                exact
                path="/myXboxOneGames"
                render={(props) => (
                  <Fragment>
                    <GameSearch
                      searchGames={this.searchGames}
                      showAllGames={this.showAllGames}
                      clearGames={this.clearGames}
                      showClear={xboxOneGames.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <MyXboxOneGames
                      loading={loading}
                      games={xboxOneGames}
                      player={newProfile}
                    />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/myXbox360Games"
                render={(props) => (
                  <Fragment>
                    <GameSearch
                      searchGames={this.searchGames}
                      showAllGames={this.showAllGames}
                      clearGames={this.clearGames}
                      showClear={xbox360Games.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <MyXbox360Games
                      loading={loading}
                      games={xbox360Games}
                      player={myInfo}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

export { App };
