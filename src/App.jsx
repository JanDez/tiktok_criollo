import './App.css'

import VideoPlayer from './components/VideoPlayer'

import useVideoPlayer from "./hooks/useVideoPlayer"

function App () {
  return (
    <div className='App'>
      <main>
        <VideoPlayer />
      </main>
    </div>
  )
}

export default App
