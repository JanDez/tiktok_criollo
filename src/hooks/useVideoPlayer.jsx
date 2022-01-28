import { useState, useEffect } from "react"

const useVideoPlayer = () => {
  const [player, setPlayerState] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [muted, setMuted] = useState(false)
}
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
export default useVideoPlayer
