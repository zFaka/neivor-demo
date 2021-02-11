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

import {sendDataOfPage1} from '../../actions/form'; 




export const Personal = ({navigation}) => {




  // Style Switches


  const classes = useStyle();




  // leave the functions handy 


  const dispatch = useDispatch();




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
  // dispatches the action which 
  // uploads the data to the store 
  // and goes to the next page


  const handleNextPage = () => {
    dispatch(sendDataOfPage1(fullName, dni))
    return navigation.next()};




  return (
    <>




      {/*  Progress Bar  */}


      <div className='progress1 progress-bar'/>




      {/*  Personal info header  */}


      <Typography align='center' style={{letterSpacing:'1.5px', fontWeight:'600', marginBottom:'6vh', marginTop:'3.4vh', fontSize:'5vh', color:'#4b4f54'}}>
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
          autoComplete='off'
          type="number"
          name='dni'
          value={dni}
          onChange={handleInputChange}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel}}}

          style={{marginTop:'5vh', color:'black'}}
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
