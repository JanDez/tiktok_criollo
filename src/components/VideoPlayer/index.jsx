import styles from './modules.styles.css'
import { useRef, useState } from 'react'
const SRC =
    'https://v16-webapp.tiktok.com/3be9a6e5382787c15b1329a60abe85b5/61eb9546/video/tos/useast2a/tos-useast2a-pve-0068/4dc3269949f946409f1774782be2e6ad/?a=1988&br=3548&bt=1774&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpqkag3-I&l=202201212323440102230981510D75301F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amQ7NDw6Zmk4OTMzNzczM0ApZ2RlN2k8Nzw6N2c4OGU2M2dfMWNecjRna3FgLS1kMTZzczIvYl4zYWMuMDUtLTZfYTU6Yw%3D%3D&vl=&vr='
export default function VideoPlayer () {
    const [playing, setPlaying] = useState(false)
    const video = useRef()
    const handlePlayer = () => {
        if (playing) {
            video.current.stop()
        } else {
            video.current.play()
        }
        setPlaying(!playing)
    }

    return (
      <div>
        <video
          className={styles.video}
          ref={video}
          src={SRC}
          controls={false}
        />
        <button
          className={styles.player}
          onClick={handlePlayer}
        />
      </div>
  )
}
