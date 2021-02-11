import { types } from '../types/types';




// Form Actions that are dispatched to a reducer




// Submit data to state


export const sendDataOfPage1 = (
    fullName,
    dni
) => ({
    type: types.formSubmit,
    payload: {
        fullName,
        dni
    }
});




// Submit data to state

export const sendDataOfPage2 = ( 
    variousDays,
    startDate,
    endDate,
    visitType,
    comeInCar 
) => ({
    type: types.formSubmit,
    payload: {
        variousDays,
        startDate,
        endDate,
        visitType,
        comeInCar}
});




// Submit data to state


export const sendDataOfPage3 = (
    vehicleType,
    numPlate 
) => ({
    type: types.formSubmit,
    payload: {
        vehicleType,
        numPlate}
});




// Submit data to state


export const sendDataOfPage4 = (
    comeInCar,
    companionsTravel,
    numberOfCompanions
) => ({
    type: types.formSubmit,
    payload: {
        comeInCar,
        companionsTravel,
        numberOfCompanions}
});




// Delete vehicle data from state


export const deleteVehicleData = () => ({
    type: types.formDeleteVehicleData});




// Delete endData data from state


export const deleteEndDateData= () => ({
    type: types.formDeleteEndDateData});




// Delete comeInCar data from state


export const deleteComeInCarData = () => ({
    type: types.formDeleteComeInCarData});
