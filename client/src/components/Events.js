import React, { useEffect, useState } from 'react'
import EventInfo from './EventInfo';
import axios from 'axios';

function Concert(date, name, info) {
    this.date = date;
    this.name = name;
    this.info = info;
    this.prettyDate = () => {
        return ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    }
    this.print = () => {
        // console.log(`Date: ${this.prettyDate(date)}, name: ${name}, info: ${info}`);
    }
}

function concertDate(year, month, day, hours, minutes) {
    return new Date(year, month - 1, day, hours, minutes);
}

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// const concerts = [
//     new Concert(concertDate(2020, 12, 10, 12, 0), 'Rotary Concert', 'A concert for recieving a stipend from the Kalmar Rotary society.'),
//     new Concert(concertDate(2021, 8, 10, 19, 0), 'Luigi Nono - Intoleranza', 'Henrik Zenkert is singing at the Salzburger Festspiele.'),
//     new Concert(concertDate(2021, 8, 11, 19, 0), 'Luigi Nono - Intoleranza', 'Henrik Zenkert is singing at the Salzburger Festspiele.'),
// ]
export default function Events() {
    const [concerts, setConcerts] = useState([])
    useEffect(() => {
        axios.get('/api/calendar').then(
            res => setConcerts(res.data)
        ).catch(err => {
            console.error(err);
        })
    }, [])
    return (
        <>
            <h1>Concerts</h1>
            {concerts.map((concert, index) => {
                console.log(concert);
                return <EventInfo concert={concert} key={index} />
            })}
        </>
    )
}