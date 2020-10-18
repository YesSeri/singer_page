import React from 'react'
import styled from 'styled-components'
import Youtube from './Youtube'
const VideoContainer = styled.div`
	display:flex;
	flex-wrap: wrap;
  @media (max-width: 768px) {
		display: block; 
  }
`;
const Video = styled.div`
	flex: 0 49%; 
	margin: 2px;
	height: auto;
  @media (max-width: 768px) {
	margin: 0%, 1%;
  }
`;

const videos = ["IkMXMEplOIo", 'e83YlSBFwE0', '9N4Kd92-kRY', 'u0uAzhTWhTM'] // Id of youtube video

export default function Media() {
	return (
		<>
			<h1>Media</h1>
			<VideoContainer>
				{videos.map((videoId, index) => {
					return (
						<Video key={index}>
							<Youtube videoId={videoId} />
						</Video>)
				})}
			</VideoContainer>
		</>

	)
}