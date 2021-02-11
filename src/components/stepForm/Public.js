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

import {deleteEndDateData, sendDataOfPage2} from '../../actions/form';




export const Public = ({ navigation}) => {




  // Style Switches


  const classes = useStyle();




  // leave the functions handy 


  const dispatch = useDispatch();


  const [
    switchValueEndDate,
    switchValueComeInCar, 
    ,
    ,
    switchBooleanEndDate,
    switchBooleanComeInCar
  ] = useSwitch();




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
  // dispatches the action which 
  // uploads the data to the store 
  // and goes to the next page


  const handleNextPage = () => {
    dispatch(sendDataOfPage2(
      switchValueEndDate,
      startDateValue.startDate,
      endDateValue.endDate,
      visitType,
      switchValueComeInCar))
    return navigation.next()};




  return (
    <>




      {/*Progress Bar*/}


      <div className='progress2 progress-bar'/>




      {/*  Header visit info  */}


      <Typography
        align='center'
        style={{letterSpacing:'1.5px', fontWeight:'600', marginBottom:'3vh', marginTop:'3.4vh', fontSize:'5vh', color:'#4b4f54'}}
      >
        Algunos datos más
      </Typography>




      <Container maxWidth='xs'>




        {/*  Switch button

             If come for 1 day 
             will switch the value  */}


        <Box display='flex' justifyContent='space-between'>
          <Typography variant='caption' style={{marginTop:'0.6rem'}}>
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


        <Grid container style={{display:'flex', justifyContent:'left', marginTop:'5.3vh'}}>




          {/*  Start date input  */}


          <Grid item xs={switchValueEndDate ? 6 : 12} style={{transition:'0.3s ease'}}>
              <KeyboardDatePicker
                className='date start-date'
                variant='outlined'
                id="date-picker-dialog-1" 
                label="Dia de inicio" 
                format='dd/MM/yyyy'
                value={startDateValue.startDate}
                onChange={handleStartDatePickerChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',}}/>
          </Grid>




          {/*  End date input  */}


          <Grid item xs={6} 
            style={{display:`${!switchValueEndDate ? 'none' : ''}`}}
          >
              <KeyboardDatePicker
                className='date end-date'
                id="date-picker-dialog-2"
                label="Dia de fin"
                format='dd/MM/yyyy'
                value={endDateValue.endDate}
                onChange={handleEndDatePickerChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',}}/>
          </Grid>
        </Grid>




        {/*  Type of visit selector  */}


        <FormControl fullWidth variant="outlined" style={{marginTop:'5.3vh'}}>
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
          <Typography variant='caption' style={{marginTop:'0.6rem'}}>
            ¿Viene en coche?
          </Typography>

          <Switch 
            color='primary'
            checked={switchValueComeInCar}
            onChange={switchBooleanComeInCar}

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
