import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import YtSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyCEgOwFPp-Ij_6alAJ4u-NafQ1ktFQgn0s'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedVideo: null, videos: [] }

    YtSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] })
    })
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
