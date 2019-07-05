import React, { Component } from 'react';
// import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const giphy = require('giphy-api')({
  https: true,
  apiKey: 'zRCdOl2r1yFFmbMYJxMOdH2ZsrSeXDhF'
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "uiWpuTl0Xbznfe9K6V"
    };
  }

  updateGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    // call API
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateGif={this.updateGif} />
        </div>
      </div>
    );
  }
}


export default App;
