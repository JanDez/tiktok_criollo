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
  

export default useVideoPlayer
