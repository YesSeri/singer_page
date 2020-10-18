import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
	margin-top: 20px;
  max-width: 100%;
  height: auto;
  @media (max-width: 768px) {
		margin-top:0px;
  }
`;
export default function Home() {
	return (
		<>
			<Image src="./cropped_pic.jpg" alt="" />
		</>
	)
}