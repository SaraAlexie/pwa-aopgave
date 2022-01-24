import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { DateContext } from "../contexts/DateContext";
import Card from '../styled/Card';
import Spinner from './Spinner';


const BirthCard = () => {

    const { month, day } = useContext(DateContext);

    const [births, setBirths] = useState();

    useEffect(() => {
        axios(`https://byabbe.se/on-this-day/${month}/${day}/births.json`)
            .then((result) => setBirths(result.data.births))
    }, [day, month]);

    return !births ? <Spinner /> : (
        <section>
            <h2>Births per year</h2>
            {births?.map((birth) => (
                <Card key={birth.description}>
                    <h3>{birth.year}</h3>
                    <p>{birth.description}</p>
                </Card>
            ))}
        </section>
    );
}
 
export default BirthCard;