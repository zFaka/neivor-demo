import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Grid, Typography} from '@material-ui/core';


// Icons

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';


// Hooks

import {useDispatch} from 'react-redux';
import {usePersonalForm} from '../../hook/usePersonalForm';
import {useVehicleButtons} from '../../hook/useVehicleButtons';
import {useStyle} from '../../hook/useStyle';


//Actions

import {changeIndexPage, sendDataOfPage3} from '../../actions/form';
import {useValidation} from '../../hook/useValidation';
import {useSwitch} from '../../hook/useSwitch';




export const Vehicle = ({navigation}) => {




  // leave the functions handy 


  const [
    vehicleValue,
    chooseCar,
    chooseBike,
    chooseMotorcycle
  ] = useVehicleButtons();

  const [
    , 
    validateNumber, 
    , 
    , 
    validateVehicle
  ] = useValidation();

  const [ 
    ,
    switchValueComeInVehicle,
  ] = useSwitch();

  const dispatch = useDispatch();
  const classes = useStyle();




  // leave the functions handy 
  // destructuring the numPlate
  // from formLoginValues and set
  // numPlate with a empty string


  const [
    formLoginValues,
    handleInputChange 
  ] = usePersonalForm({
    numPlate:''
  });

  const {numPlate} = formLoginValues;




  // handleNextPage when called,
  // validate inputs, dispatches 
  // the action which uploads the 
  // data to the store change index
  // page and goes to the next page


  const handleNextPage = () => {

    const numberPlateValidationValue = validateNumber(numPlate);
    const vehicleTypeValidationValue = validateVehicle(vehicleValue.stringValue);

    if(
      vehicleTypeValidationValue && 
      numberPlateValidationValue
    ){
      dispatch(sendDataOfPage3(
        vehicleValue,
        numPlate, 
        switchValueComeInVehicle
      ))

      //change page index

      dispatch(changeIndexPage(4))
      navigation.next()
    }
  };



  return (
    <>




      {/*Progress Bar*/}


      <div className='progress3 progress-bar'/>




      {/*  Vehicle info header  */}


      <Typography
        align='center'
        className='header page-1'
        style={{
          letterSpacing:'1.5px',
          fontWeight:'600',
          marginBottom:'8vh',
          marginTop:'3.4vh',
          fontSize:'5vh',
          color:'#4b4f54'}}
      >
        ¿Qué vehículo usa?
      </Typography>




      <Container maxWidth='xs'>




        {/*  Vehicles buttons  */}


        <div 
          style={{
            marginBottom:'5vh',
            display:'flex',
            justifyContent:'space-between'}}
        >
          <Button
            onClick={chooseCar}

            style={{

              backgroundColor:`${vehicleValue.booleanValue.car ?'#3bbfad':'white'}`, 
              border:`1px solid ${vehicleValue.booleanValue.car ?'#35ac9b':'black'}`, 

              borderRadius:'5px', 
              padding:'0'}}
          >
            <DriveEtaIcon
              style={{
                fontSize: 'max(15vh, 65px)'}}
            />
          </Button>

          <Button
            onClick={chooseBike}

            style={{

              backgroundColor:`${vehicleValue.booleanValue.bike ?'#3bbfad':'white'}`, 
              border:`1px solid ${vehicleValue.booleanValue.bike ?'#35ac9b':'black'}`, 

              padding:'10px', 
              borderRadius:'5px'}}
          >
            <DirectionsBikeIcon
              style={{fontSize: 'max(12vh, 45px)'}}
            />
          </Button>

          <Button
            onClick={chooseMotorcycle}

            style={{

              backgroundColor:`${vehicleValue.booleanValue.motorbike ?'#3bbfad':'white'}`, 
              border:`1px solid ${vehicleValue.booleanValue.motorbike ?'#35ac9b':'black'}`, 

              padding:'0', 
              borderRadius:'5px'}}
          >
            <MotorcycleIcon
              style={{fontSize: 'max(15vh, 65px)'}}
            />
          </Button>
        </div>




        {/*  Number plate input  */}


        <TextField
          name='numPlate'
          value={numPlate}
          onChange={handleInputChange}
          type='number'
          autoComplete='off'
          InputLabelProps={{
            classes: {
              root: classes.cssLabel}}}

          label='Matrícula'
          margin='normal'
          variant='outlined'
          fullWidth
        />


      </Container>




      {/*  Next page  

             If is clicked will change 
             to the next page and Submit 
             data to the store            */}


      <Grid item xs={12}
        style={{
          position: 'fixed',
          width:'100%', 
          maxWidth:'396px', 
          minWidth:'0', 
          paddingLeft:'18px', 
          paddingRight:'18px',
          left: '50%',
          top: '90%',
          transform: 'translate(-50%, -50%)'}}
      >
        <Button
          onClick={handleNextPage}

          color='primary'
          variant='contained'
          fullWidth
        >
          Siguiente 
        </Button>
      </Grid>
    </>
  )}
