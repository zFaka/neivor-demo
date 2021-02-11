import { useState } from 'react';
import {useSelector} from 'react-redux';




// Create counter hook


export const useCounter = () => {




    // Get initial state 


    const {numberOfCompanions} = useSelector(state=>state.form);




    // Set initial state


    const [
        counterValue,
        setCounterValue
    ] = useState(numberOfCompanions);




    // Reset counter 


    const reset = () => {
        setCounterValue(0)};




    // Increase counter value +1


    const handleIncrease = () => {
        setCounterValue(counterValue+1)};




    // Increase counter value -1


    const handleDecrease = () => {
        if(counterValue > 0){
            setCounterValue(counterValue-1)
        }else{
            return counterValue
        }
    }




    // Returns the requested values 
    // from where they were called


    return [
        counterValue,
        handleIncrease,
        handleDecrease,
        reset
    ];


}
