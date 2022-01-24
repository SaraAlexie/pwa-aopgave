import axios from 'axios';
import { useEffect, useState } from 'react';


const Test = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    const monthString = months[date.getMonth()];
    const month = date.getMonth()+1;
    const day = date.getDate();

    const [history, setHistory] = useState();

    useEffect(() => {
        axios(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
        .then((result) => setHistory(result.data.events))
    }, [day, month]);

    return (
        <section>
            <h1>{monthString} {day} in history</h1>
            {history?.map((event) => (
                <div key={event.description}>
                    <h2>{event.year}</h2>
                    <p>{event.description}</p>
                </div>
            ))}
        </section>
    );
}
 
export default Test;