import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components'
const VideoContainer = styled.div`
	display: ${(props) => props.showVideo ? 'block' : 'none'};
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
	overflow: hidden;

	iframe {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
`

export default function Youtube({ videoId }) {
	const [showVideo, setShowVideo] = useState(false);
	const opts = {
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<VideoContainer showVideo={showVideo}>
			<YouTube videoId={videoId} opts={opts} onReady={() => setShowVideo(true)} />;
		</VideoContainer>
	)
}