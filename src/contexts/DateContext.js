import { createContext } from "react";

export const DateContext = createContext();

const DateContextProvider = (props) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    const monthString = months[date.getMonth()];
    const month = date.getMonth()+1;
    const day = date.getDate();

    return (
        <DateContext.Provider value={{ month, day, monthString }}>
            {props.children}
        </DateContext.Provider>
    );
}
 
export default DateContextProvider;