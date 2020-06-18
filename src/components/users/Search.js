import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchFriends: PropTypes.func.isRequired,
    showAllFriends: PropTypes.func.isRequired,
    clearFriends: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("No serch criteria entered", "light");
    } else {
      this.props.searchFriends(this.state.text);
      //this.setState({ text: "" });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearFriends, showAllFriends } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Friends..."
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
              onClick={showAllFriends}
            >
              Show All Friends
            </button>
          </div>
        </div>
        {showClear && (
          <button className="btn btn-dark btn-block" onClick={clearFriends}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
