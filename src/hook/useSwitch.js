import { useState } from 'react';
import {useSelector} from 'react-redux';




// Create switch hook


export const useSwitch = () => {




    // Get initial state 


    const {
        variousDays,
        comeInCar,
        useVehicle,
        companionsTravel
    } = useSelector(state=>state.form);




    // Set initials states


    const [
        switchValueEndDate,
        setSwitchValueEndDate
    ] = useState(variousDays);


    const [
        switchValueComeInCar,
        setSwitchValueComeInCar
    ] = useState(comeInCar);


    const [
        switchValueVehicle,
        setSwitchValueVehicles
    ] = useState(useVehicle);


    const [
        switchValueCompanions,
        setSwitchValueCompanions
    ] = useState(companionsTravel);



    // Change to a boolean value 
    // if visiting or not multiple days 

    const switchBooleanEndDate = () => {
        setSwitchValueEndDate(
            !switchValueEndDate)};




    // Change to a boolean value 
    // if go or not in a car 
    

    const switchBooleanComeInCar = () => {
        setSwitchValueComeInCar(
            !switchValueComeInCar)};




    // Change to a boolean value 
    // if go or not in a Vehicle
   

    const switchBooleanVehicle = () => {
        setSwitchValueVehicles(
            !switchValueVehicle)};




    // Change to a boolean value 
    // if it goes with companions
    

    const switchBooleanCompanions = () => {
        setSwitchValueCompanions(
            !switchValueCompanions)};




    // Returns the requested values 
    // from where they were called


    return [


        // Functions That Return Values

        switchValueEndDate,
        switchValueComeInCar,
        switchValueVehicle,
        switchValueCompanions,


        // Functions That Change Values

        switchBooleanEndDate,
        switchBooleanComeInCar, 
        switchBooleanVehicle,
        switchBooleanCompanions 


    ];


}
