import { useState } from 'react';
import {useSelector} from 'react-redux';




// Create vechicle button hook


export const useVehicleButtons = () => {




    // Get initial state 


    const {vehicleType} = useSelector(state=>state.form);





    // Set initial state


    const [
        vehicleValue,
        setVehicleValue
    ] = useState(vehicleType);





    //Switch values to car


    const chooseCar = () => {
        setVehicleValue({
            ...vehicleValue,
            stringValue:'Going Car',  
            booleanValue:{
                car:true, 
                bike:false, 
                motorbike:false, 
            } 
        })
    }





    // Switch values to bike 


    const chooseBike = () => {
        setVehicleValue({
            ...vehicleValue,
            stringValue:'Going Bike', 
            booleanValue:{
                car:false, 
                bike:true, 
                motorbike:false
            }
        })
    }





    // Switch values to motorcycle 


    const chooseMotocycle = () => {
        setVehicleValue({
            ...vehicleValue,
            stringValue:'Going Motorcycle', 
            booleanValue:{
                car:false, 
                bike:false, 
                motorbike:true
            }
        })
    }





    // Returns the requested values 
    // from where they were called


    return [
        vehicleValue,
        chooseCar,
        chooseBike,
        chooseMotocycle
    ]


}
