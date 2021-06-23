import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import YtSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyCEgOwFPp-Ij_6alAJ4u-NafQ1ktFQgn0s'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YtSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos })
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
