import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.updateGif) {
      this.props.updateGif(this.props.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
