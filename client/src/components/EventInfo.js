import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin: auto;
  background-color: palevioletred;
  border: 3px solid black;
  margin-bottom: 3px;
  width: 50%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function convertDate(mysqlDate){
  const [date, time] = mysqlDate.split(/[T]/)
  const properTime = time.slice(0, 5)
  console.log(`date ${date} time ${properTime}`);
  return `${date} ${properTime}`
}

export default function EventInfo({ concert: { name, date, info } }) {
  const dateTime = convertDate(date);
  return (
    <Div>
      <h1>{name}</h1>
      <p>{dateTime}</p>

      <p>{info}</p>
    </Div>
  )
}