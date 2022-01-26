import { useState, useEffect } from "react"

const useVideoPlayer = () => {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [muted, setMuted] = useState(false)}

export default useVideoPlayer
