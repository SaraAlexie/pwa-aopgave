import { useContext } from 'react';
import BirthCard from '../components/BirthCard';
import Main from '../styled/Main';
import { DateContext } from "../contexts/DateContext";


const Births = () => {

    const { monthString, day } = useContext(DateContext);

    return (
        <Main>
            <h1>List of historical births on {monthString} {day}</h1>
            <BirthCard />
        </Main>
    );
}
 
export default Births;