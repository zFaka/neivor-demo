import { types } from '../types/types';




// Form Actions that are dispatched to a reducer




// Submit data to state


export const sendDataOfPage1 = (
    fullName,
    dni, 
) => ({
    type: types.formSubmit,
    payload: {
        fullName,
        dni, 
    }
});




// Change index of pages 


export const changeIndexPage = (
    pageIndex
) => ({
    type: types.formSubmit,
    payload: {
        pageIndex
    }
});




// Submit data to state


export const sendDataOfPage2 = ( 
    variousDays,
    startDate,
    endDate,
    visitType,
    comeInVehicle, 
) => ({
    type: types.formSubmit,
    payload: {
        variousDays,
        startDate,
        endDate,
        visitType,
        comeInVehicle, 
    }
});




// Submit data to state


export const sendDataOfPage3 = (
    vehicleType,
    numPlate, 
    comeInVehicle, 
) => ({
    type: types.formSubmit,
    payload: {
        vehicleType,
        numPlate, 
        comeInVehicle, 
    }
});




// Submit data to state


export const sendDataOfPage4 = (
    comeInVehicle, 
    companionsTravel,
    numberOfCompanions
) => ({
    type: types.formSubmit,
    payload: {
        comeInVehicle, 
        companionsTravel,
        numberOfCompanions}
});




// Delete vehicle data from state


export const deleteVehicleData = () => ({
    type: types.formDeleteVehicleData});




// Delete endData data from state


export const deleteEndDateData= () => ({
    type: types.formDeleteEndDateData});
