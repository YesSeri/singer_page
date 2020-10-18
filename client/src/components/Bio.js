import React from 'react'
import styled from 'styled-components'
import BioText from './BioText'

const Image = styled.img`
    max-width: 25%;
    height: auto;
    float: left;
    padding: 0 10px 0 0;
    @media (max-width: 768px) {
    	max-width: 50%;
    }
    @media (max-width: 600px) {
    	max-width: 100%;
    }
`
const Div = styled.div`
    margin: auto; 
    max-width:70vw;
    @media (max-width: 1440px) {
        max-width: 90vw;
    }
    @media (max-width: 768px) {
        max-width: 100vw;
    }
`
export default function Bio() {
    return (
        <Div>
            <h1>Bio</h1>
            <Image src="./happy_pic.jpg" align="left" />
            <p>{BioText}</p>
        </Div>
    )
}