import { useContext } from 'react';
import { DateContext } from "../contexts/DateContext";
import EventCard from '../components/EventCard';
import Main from '../styled/Main';



const Today = () => {

    const { monthString, day } = useContext(DateContext);

    return (
        <Main>
            <h1>{monthString} {day} in history</h1>
            <EventCard />
        </Main>
    );
}
 
export default Today;