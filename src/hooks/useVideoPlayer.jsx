import { useState, useEffect } from 'react'

const useVideoPlayer = () => {
  const [playerState, setPlayerState] = useState(false)
  const [isPlaying, setisPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [muted, setMuted] = useState(false)
  const togglePlay = () => {
    setPlayerState({
      ...playerState,
			isPlaying: !playerState.isPlaying,
		})
  }
  
  useEffect(() => {
    playerState.isPlaying
    ? videoElement.current.play()
    : videoElement.current.pause()
  }, [playerState.isPlaying, videoElement])
  
  const handleOnTimeUpdate = () => {
    const progress =
    (videoElement.current.currentTime / videoElement.current.duration) *
    100
		setPlayerState({
      ...playerState,
			progress,
		})
  }
  
  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value)
		videoElement.current.currentTime =
    (videoElement.current.duration / 100) * manualChange
		setPlayerState({
      ...playerState,
			progress: manualChange,
		})
  }
  
  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value)
		videoElement.current.playbackRate = speed
		setPlayerState({
      ...playerState,
			speed,
		})
  }
  
  const toggleMute = () => {
    setPlayerState({
      ...playerState,
			isMuted: !playerState.isMuted,
		})
  }
  
  useEffect(() => {
    playerState.isMuted
    ? (videoElement.current.muted = true)
    : (videoElement.current.muted = false)
  }, [playerState.isMuted, videoElement])
  
  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute
  }
}
  
  export default useVideoPlayer
  