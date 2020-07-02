import React, { Component } from "react";
import PropTypes from "prop-types";

export class GameSearch extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    showClear: PropTypes.bool.isRequired,
    searchGames: PropTypes.func.isRequired,
    showAllGames: PropTypes.func.isRequired,
    clearGames: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("No search criteria entered", "light");
    } else {
      this.props.searchGames(this.state.text);
      //this.setState({ text: "" });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, showAllGames, clearGames } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Games..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        <div>
          <div>
            <button
              className="btn btn-primary btn-block"
              onClick={showAllGames}
            >
              Show All Games
            </button>
          </div>
        </div>
        {showClear && (
          <button className="btn btn-dark btn-block" onClick={clearGames}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default GameSearch;
