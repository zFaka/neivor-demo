import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {FormControl, InputLabel, MenuItem, Select, Switch, Typography} from '@material-ui/core';
import {KeyboardDatePicker} from '@material-ui/pickers';
import {Box, Grid} from '@material-ui/core';


//Hooks

import {useDispatch} from 'react-redux';
import {useSwitch} from '../../hook/useSwitch';
import {usePersonalForm} from '../../hook/usePersonalForm';
import {useStyle} from '../../hook/useStyle';

//Actions

import {changeIndexPage, deleteEndDateData, deleteVehicleData, sendDataOfPage2} from '../../actions/form';
import {useValidation} from '../../hook/useValidation';




export const Public = ({navigation}) => {




  // Style Switches


  const classes = useStyle();




  // Destructiring go function 


  const {go} = navigation;




  // leave the functions handy 


  const dispatch = useDispatch();


  const [
    switchValueEndDate,
    switchValueComeInVehicle, 
    , 

    switchBooleanEndDate,
    switchBooleanComeInVehicle
  ] = useSwitch();
  const [
    , 
    , 
    validateDate, 
    validateSelector
  ] = useValidation();




  // Leave the functions handy 
  // set visitType with a empty 
  // string and destructuring the 
  // visitType from formLoginValues 


  const [

    formLoginValues,
    handleInputChange, 
    , 
    startDateValue, 
    endDateValue, 
    handleStartDatePickerChange, 
    handleEndDatePickerChange

  ] = usePersonalForm({
    visitType:'', 
  });

  const {visitType} = formLoginValues;




  // disableEndDate when called,
  // dispatches the action which 
  // delete end date data from the 
  // store and goes to the next page


  const disableEndDate = () => {
    dispatch(deleteEndDateData())};




  // handleNextPage when called,
  // validate data, dispatches the
  // action which uploads the data to 
  // the store and goes to the next page


  const handleNextPage = () => {

    const startDateValidationValue = validateDate(startDateValue.startDate);
    const endDateValidationValue = validateDate(startDateValue.endDate);
    const selectorValidationValue = validateSelector(visitType);

    if(
      startDateValidationValue && 
      endDateValidationValue &&
      selectorValidationValue
    ){
      dispatch(sendDataOfPage2(
        switchValueEndDate,
        startDateValue.startDate,
        endDateValue.endDate,
        visitType,
        switchValueComeInVehicle, 
      ))

      if(switchValueComeInVehicle){
        dispatch(changeIndexPage(3))
        go('vehicle')
      } else {

        // Change page index

        dispatch(changeIndexPage(4))
        dispatch(deleteVehicleData())
        go('check')
      }
    }

  };




  return (
    <>




      {/*Progress Bar*/}


      <div className='progress2 progress-bar'/>




      {/*  Header visit info  */}


      <Typography
        align='center'
        className='header page-2-header'
      >
        Algunos datos más
      </Typography>




      <Container maxWidth='xs'>




        {/*  Switch button

             If come for 1 day 
             will switch the value  */}


        <Box display='flex' justifyContent='space-between'>
          <Typography 
            variant='caption'
            className='come-in-vehicle'
          >
            Visita de varios dias
          </Typography>
          <Switch
            color='primary'
            checked={switchValueEndDate}
            onChange={switchBooleanEndDate}
            onClick={disableEndDate}

            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}

          />
        </Box>




        {/*  Date picker box */}


        <div className='box date-picker-box'>



          {/*  Start date input  */}


          <KeyboardDatePicker
            style={{
              marginRight:`${!switchValueEndDate ? '0' : '5px'}`,
            }}
            className='date start-date date-picker'
            variant='outlined'
            label="Dia de inicio" 
            format='dd/MM/yyyy'
            value={startDateValue.startDate}
            onChange={handleStartDatePickerChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',}}/>
          {/*  End date input  */}
          <KeyboardDatePicker
            style={{
              display:`${!switchValueEndDate ? 'none' : ''}`,
              marginLeft:`${!switchValueEndDate ? '0' : '5px'}`, 
            }}
            className={`date-picker date end-date ${!switchValueEndDate ? 'date-out' : 'date-in'}`}
            label="Dia de fin"
            format='dd/MM/yyyy'
            value={endDateValue.endDate}
            onChange={handleEndDatePickerChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',}}/>
        </div>




        {/*  Type of visit selector  */}


        <FormControl 
          fullWidth 
          variant="outlined" 
          className='selector'
        >
          <InputLabel className='inmg'>
            Tipo de visita
          </InputLabel>

          <Select
            name='visitType'
            value={visitType}
            onChange={handleInputChange}
            label="Tipo de visita"
          >
            <MenuItem value='social'>Social</MenuItem>
            <MenuItem value='work'>Trabajo</MenuItem>
            <MenuItem value='emergency'>Emergencia</MenuItem>
          </Select>
        </FormControl>




        {/*  Switch button

             If come in a car 
             will switch the value  */}


        <Box display='flex' justifyContent='space-between' marginTop='3vh' marginBottom='0'>
          <Typography 
            variant='caption'
            className='come-in-vehicle'
          >
            ¿Viene en un vehículo?
          </Typography>

          <Switch 
            color='primary'
            checked={switchValueComeInVehicle}
            onChange={switchBooleanComeInVehicle}

            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}

          />
        </Box>


      </Container>




      {/*  Next page  

             If is clicked will change 
             to the next page and Submit 
             data to the store            */}


      <Grid item xs={12}
        className='next-page-button'
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
