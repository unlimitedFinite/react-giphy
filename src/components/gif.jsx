import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    if (this.props.updateGif) {
      this.props.updateGif(this.props.id);
    }
  }

  render() {
    console.log(`rendered gif ${this.props.id}`);
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" key={this.props.id} alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
