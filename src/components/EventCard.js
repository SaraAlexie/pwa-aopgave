import { DateContext } from "../contexts/DateContext";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import Card from "../styled/Card";
import Spinner from "./Spinner";

const EventCard = () => {

    const { day, month } = useContext(DateContext);

    const [history, setHistory] = useState();

    useEffect(() => {
        axios(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
        .then((result) => setHistory(result.data.events))
    }, [day, month]);

    return !history ? <Spinner /> : (
        <section>
            <h2>Events per year</h2>
            {history?.map((event) => (
                <Card key={event.description}>
                    <h3>{event.year}</h3>
                    <p>{event.description}</p>
                </Card>
            ))}
        </section>
    );
}
 
export default EventCard;

/*
{data.events?.map((event) => (
                <article key={event.description}>
                    <h2>{event.year}</h2>
                    <p>{event.description}</p>
                </article>
            ))}
*/