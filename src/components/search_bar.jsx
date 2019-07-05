import React, { Component } from 'react';

class SearchBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleUpdate = (event) => {
    this.props.search(event.currentTarget.value);
  }

  render() {
    console.log('rendered search bar');
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
