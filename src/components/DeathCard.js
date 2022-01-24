import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { DateContext } from "../contexts/DateContext";
import Card from '../styled/Card';
import Spinner from './Spinner';


const DeathCard = () => {

    const { month, day } = useContext(DateContext);

    const [deaths, setDeaths] = useState();

    useEffect(() => {
        axios(`https://byabbe.se/on-this-day/${month}/${day}/deaths.json`)
            .then((result) => setDeaths(result.data.deaths))
    }, [day, month]);

    return !deaths ? <Spinner /> : (
        <section>
            <h2>Deaths per year</h2>
            {deaths?.map((death) => (
                <Card key={death.description}>
                    <h3>{death.year}</h3>
                    <p>{death.description}</p>
                </Card>
            ))}
        </section>
    );
}
 
export default DeathCard;