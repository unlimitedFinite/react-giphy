import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.search(event.currentTarget.value);
  }
  render() {
    return (
      <input
        type="text"
        className="form-search form-control"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
