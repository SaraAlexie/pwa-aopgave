import { useContext } from 'react';
import DeathCard from '../components/DeathCard';
import Main from '../styled/Main';
import { DateContext } from "../contexts/DateContext";


const Deaths = () => {

    const { monthString, day } = useContext(DateContext);

    return (
        <Main>
            <h1>List of historical deaths on {monthString} {day}</h1>
            <DeathCard />
        </Main>
    );
}
 
export default Deaths;