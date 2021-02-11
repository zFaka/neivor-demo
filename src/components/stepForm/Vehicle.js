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


//Actions

import {sendDataOfPage3} from '../../actions/form';




export const Vehicle = ({navigation}) => {




  // leave the functions handy 


  const [
    vehicleValue,
    chooseCar,
    chooseBike,
    chooseMotorcycle
  ] = useVehicleButtons();

  const dispatch = useDispatch();




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
  // dispatches the action which 
  // uploads the data to the store 
  // and goes to the next page


  const handleNextPage = () => {
    dispatch(sendDataOfPage3(vehicleValue, numPlate))
    return navigation.next()};



  return (
    <>




      {/*Progress Bar*/}


      <div className='progress3 progress-bar'/>




      {/*  Vehicle info header  */}


      <Typography
        align='center'
        style={{letterSpacing:'1.5px', fontWeight:'600', marginBottom:'8vh', marginTop:'3.4vh', fontSize:'5vh', color:'#4b4f54'}}
      >
        ¿Qué vehículo usa?
      </Typography>




      <Container maxWidth='xs'>




        {/*  Vehicles buttons  */}


        <Grid container style={{marginBottom:'5vh'}}>
          <Grid item xs={4} style={{textAlign:'center'}}>
            <Button
              onClick={chooseCar}

              style={{

                backgroundColor:`${vehicleValue.booleanValue.car ?'#3bbfad':'white'}`, 
                border:`1px solid ${vehicleValue.booleanValue.car ?'#35ac9b':'black'}`, 

                borderRadius:'5px',
                transform:'scale(1.5)'}}
              className='vehicle'
            >
              <DriveEtaIcon fontSize='large'
                className='vehicle-icon'
              />
            </Button>
          </Grid>

          <Grid item xs={4} style={{textAlign:'center'}}>
            <Button
              onClick={chooseBike}

              style={{

                backgroundColor:`${vehicleValue.booleanValue.bike ?'#3bbfad':'white'}`, 
                border:`1px solid ${vehicleValue.booleanValue.bike ?'#35ac9b':'black'}`, 

                borderRadius:'5px', 
                transform:'scale(1.5)'}}
              className='vehicle'
            >
              <DirectionsBikeIcon fontSize='large'
                className='vehicle-icon'
              />
            </Button>
          </Grid>

          <Grid item xs={4} style={{textAlign:'center'}}>
            <Button
              onClick={chooseMotorcycle}

              style={{

                backgroundColor:`${vehicleValue.booleanValue.motorbike ?'#3bbfad':'white'}`, 
                border:`1px solid ${vehicleValue.booleanValue.motorbike ?'#35ac9b':'black'}`, 

                borderRadius:'5px', 
                transform:'scale(1.5)'}}
              className='vehicle'
            >
              <MotorcycleIcon fontSize='large'
                className='vehicle-icon'
              />
            </Button>
          </Grid>
        </Grid>




        {/*  Number plate input  */}


        <TextField
          name='numPlate'
          value={numPlate}
          onChange={handleInputChange}
          type='number'
          autoComplete='off'

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
