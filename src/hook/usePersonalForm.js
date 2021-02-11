import { useState } from 'react';
import {useSelector} from 'react-redux';




// Create PersonalForm hook


export const usePersonalForm = () => {




    // Get initials states


    const initialState = useSelector(state=>state.form);
    const {startDate, endDate} = useSelector(state=>state.form);




    // Set initial state


    const [
        values,
        setValues
    ] = useState(initialState);


    const [
        startDateValue,
        setStartDateValue
    ] = useState({startDate});


    const [
        endDateValue,
        setEndDateValue
    ] = useState({endDate});




    // Reset form value 


    const reset = (initialState) => {
        setValues(initialState)
    };




    // Handle the inputed 
    // values and update them 


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        })
    };



    
    // Handle start date value and update it

    const handleStartDatePickerChange = ( date ) => {
        setStartDateValue({
            startDate:date
        })
    };




    // Handle end date value and update it

    const handleEndDatePickerChange = ( date ) => {
        setEndDateValue({
            endDate:date
        })
    };




    // Returns the requested values 
    // from where they were called
    
    
    return [


        // Form functions for normal values
        
        values,
        handleInputChange,
        reset ,


        // Form functions for date values
        
        startDateValue,
        endDateValue,
        handleStartDatePickerChange,
        handleEndDatePickerChange
    ];
}
