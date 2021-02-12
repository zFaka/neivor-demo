import { types } from '../types/types';




// Create a initial state tree


const initialState = {

  // Data requested on: 


  // All pages
  pageIndex:1, 


  // Page 1 

  fullName:'',
  dni:'', 


  // Page 2 

  variousDays:true, 
  startDate:new Date(), 
  endDate:new Date(), 
  visitType:'', 
  comeInVehicle:true, 


  // Page 3 

  vehicleType:{
    booleanValue:{
      car:false,
      bike:false,
      motorbike:false
    }},
  numPlate:'', 


  // Page 4 

  companionsTravel:true, 
  numberOfCompanions:0, 
  isFavourite:false, 
}




//Create a reducer to execute the dispatched actions


export const formReducer = ( state = initialState, action ) => {
  switch ( action.type ) {




      // Send data to store


    case types.formSubmit:
      return {
        ...state,
        ...action.payload,
      }



      // Delete vehicle data from store

    case types.formDeleteVehicleData:
      return {
        ...state,
        vehicleType:{booleanValue:{car:false, bike:false, motorbike:false}},
        numPlate:'', 
      }



      // Delete end date data from store

    case types.formDeleteEndDateData:
      return {
        ...state,
        endDate:'', 
      }



      // Return the same data

    default:
      return state
  }

}


