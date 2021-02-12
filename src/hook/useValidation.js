import moment from 'moment';
import Swal from 'sweetalert2';




// Regex expression for validation


const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;




// Create validation hook


export const useValidation = () => {




    // Validate Name 


    const validateString = (str) => {

        if(pattern.test(str)===true && str !== ''){
            return true}

        else {
            Swal.fire({
                icon: 'error',
                title: 'Escriba su nombre completo correctamente',
                timer: 900,
                timerProgressBar: true,
                showConfirmButton: false})}
    }




    // Validate DNI & Number Plate 


    const validateNumber = (num) => {

        if(typeof Number(num) === 'number' && num !== ''){
            return true}

        else{
            Swal.fire({
                icon: 'error',
                title: 'Complete el campo numérico correctamente',
                timer: 900,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }




    // Validate date 


    const validateDate = (dt) => {

        if(moment(dt).isValid()){
            return true}

        else{
            Swal.fire({
                icon: 'error',
                title: 'Complete la fecha correctamente',
                timer: 900,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }




    // Validate selector 


    const validateSelector = (slct) => {

        if(typeof slct === 'string' && slct !== ''){
            return true}

        else{
            Swal.fire({
                icon: 'error',
                title: 'Elija el tipo de visita',
                timer: 900,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }




    // Returns the requested values 
    // from where they were called


    return [

        validateString,
        validateNumber,
        validateDate, 
        validateSelector

    ];


}
