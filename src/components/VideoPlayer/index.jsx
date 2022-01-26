import styles from './modules.styles.css'
import { useRef } from 'react'
const url = 'https://v16-webapp.tiktok.com/5724fd309f4caa5336f9b5f070a9412c/61ebfb3a/video/tos/useast2a/tos-useast2a-ve-0068c001/c5ccd4b7b1384694aaa0194926e7781c/?a=1988&br=5114&bt=2557&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpqkag3-I&l=202201220640060102231210930C94A8EC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampkeTY6ZjZxOTMzNzczM0ApNmYzZmg6ZDs8N2RoNTlpOmdqamJecjRvMWpgLS1kMTZzczNgNTJeNF40MjE1Mi4uYi86Yw%3D%3D&vl=&vr='
const SRC = url
export default function VideoPlayer (props) {
	return (
		<div>
			<video
				
			/>
			<button className={styles.player} onClick={handlePlayer} />
		</div>
	)
}
