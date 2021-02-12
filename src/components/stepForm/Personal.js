import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Grid, Typography} from '@material-ui/core';


// Hooks

import {useDispatch} from 'react-redux';
import {usePersonalForm} from '../../hook/usePersonalForm';
import {useStyle} from '../../hook/useStyle';


// Actions

import {changeIndexPage, sendDataOfPage1} from '../../actions/form'; 
import {useValidation} from '../../hook/useValidation';




export const Personal = ({navigation}) => {




  // leave the functions handy 


  const dispatch = useDispatch();
  const classes = useStyle();
  const [
    validateString, 
    validateNumber
  ] = useValidation();




  // leave the functions handy 
  // destructuring the numPlate from 
  // formLoginValues and set fullName 
  // and dni with a empty string


  const [ formLoginValues, handleInputChange ] = usePersonalForm({
    fullName:'',
    dni:''
  });

  const {fullName, dni} = formLoginValues;




  // handleNextPage when called,
  // validate the data, dispatches
  // the action which uploads the data
  // to the store and goes to the next page


  const handleNextPage = () => {

    const numberValidationValue = validateNumber(dni);
    const stringValidationValue = validateString(fullName);

    if(
      stringValidationValue && 
      numberValidationValue
    ){
      dispatch(sendDataOfPage1(fullName, dni))

      // Change page index

      dispatch(changeIndexPage(2))
      navigation.next()
    }

  };



  return (
    <>




      {/*  Progress Bar  */}


      <div className='progress1 progress-bar'/>




      {/*  Personal info header  */}


      <Typography 
        align='center' 
        className='header page-1-header'
      >
        Datos de la visita
      </Typography>




      <Container maxWidth='xs'>




        {/*  Full name input  */}


        <TextField
          autoComplete='off'
          name='fullName'
          value={fullName}
          onChange={handleInputChange}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel}}}

          label='Nombre y apellido'
          margin='normal'
          variant='outlined'
          fullWidth
        />




        {/*  DNI input  */}


        <TextField
          className='dni-input'
          autoComplete='off'
          type="number"
          name='dni'
          value={dni}
          onChange={handleInputChange}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel}}}

          label='DNI'
          variant='outlined'
          fullWidth
        />


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
