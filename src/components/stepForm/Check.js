import React  from 'react';
import Container from '@material-ui/core/Container';
import {Avatar, Box, Button, Grid, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Switch, Typography} from '@material-ui/core';


// Icons

//import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';


// Hooks

import {useDispatch, useSelector} from 'react-redux';
import {useCounter} from '../../hook/useCounter';
import {useSwitch} from '../../hook/useSwitch';


// Actions

import {deleteVehicleData, sendDataOfPage4} from '../../actions/form';




export const Check = ({navigation}) => {




  // Destructiring go function 


  const {go} = navigation;




  // Leave the state values handy 


  const {
    fullName,
    dni, 

    vehicleType, 
    numPlate, 

    companionsTravel, 
  } = useSelector(state=>state.form);




  // Leave the functions handy 



  const dispatch = useDispatch();

  const [
    counterValue,
    handleIncrease,
    handleDecrease,
    reset
  ] = useCounter();

  const [ 
    ,
    ,
    switchValueVehicle,
    switchValueCompanions,
    ,
    ,
    switchBooleanVehicle,
    switchBooleanCompanions
  ] = useSwitch();




  // disableVehicle when called,
  // dispatches the action which 
  // delete vehicle data from the store 
  // and goes to the next page


  const disableVehicle = () => {
    dispatch(deleteVehicleData())};




  // handleNextPage when called,
  // dispatches the action which 
  // uploads the data to the store 
  // and goes to the submit page


  const handleNextPage = () => {
    dispatch(sendDataOfPage4(
      switchValueVehicle,
      switchValueCompanions,
      counterValue))
    go('submit')};




  return (
    <>




      {/*Progress Bar*/}


      <div className='progress4 progress-bar'/>




      <Container maxWidth='xs'>




        {/*  Personal box  */}


        <Grid item xs={12}
          style={{
            width:'100%', 
            maxWidth:'444px', 
            minWidth:'0', 
            marginLeft: 'auto',
            marginRight:'auto', 
            display: 'block',
            paddingLeft:'14px',
            paddingRight:'14px', 
          }}
        >
          <div style={{listStyleType:'none', marginTop:'5.1vh'}}>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant='h6' style={{fontWeight:'600'}}>
                {fullName}
              </Typography>
              <IconButton 
                onClick={()=>go('personal')}
                style={{padding:'0'}}
              >
                <EditIcon/>
              </IconButton>
            </Box>
            <ListItem disableGutters style={{paddingTop:'0'}}>
              <ListItemText
                primary={
                  <Typography variant='subtitle2' style={{marginTop:'-0.7vh'}}>
                    DNI 
                  </Typography>}
                secondary={
                  <Typography variant='subtitle2' style={{marginTop:'-0.6vh'}}>
                    {dni}
                  </Typography>}
              />
            </ListItem></div>
        </Grid>




        {/*  Vehicle box  */}


        <Grid item xs={12}
          style={{
            width:'100%', 
            maxWidth:'444px', 
            minWidth:'0', 
            marginLeft: 'auto',
            marginRight:'auto', 
            display: 'block',
            paddingLeft:'14px',
            paddingRight:'14px', 
          }}
        >
          <div style={{listStyleType:'none'}}>
            <Box display='flex' justifyContent='space-between' marginBottom='-2vh' marginTop='2.2vh'>
              <Typography variant='h6'>
                Vehículo
              </Typography>
              <Switch
                className='check'
                color='primary'
                checked={switchValueVehicle}
                onChange={switchBooleanVehicle}
                onClick={disableVehicle}
              />
            </Box>
            <ListItem disabled={!switchValueVehicle} disableGutters style={{marginTop:'0.5rem'}}>
              <ListItemAvatar>
                <Avatar variant='square' style={{borderRadius:'5px', backgroundColor:'#3bbfad', transform:'scale(1.2)', marginLeft:'0.1rem'}}>
                  <Button disabled={!switchValueVehicle}>
                    {   vehicleType.stringValue === 'car' ? <DriveEtaIcon/> : 
                        vehicleType.stringValue === 'bike' ? <DirectionsBikeIcon/> :
                        vehicleType.stringValue === 'motorcycle' ? <MotorcycleIcon/> : null}
                  </Button>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant='subtitle2' style={{marginTop:'0rem'}}>
                    Matrícula 
                  </Typography>}
                secondary={
                  <Typography variant='subtitle2' style={{marginTop:'0rem'}}>
                    {numPlate}
                  </Typography>}
              />
              <ListItemSecondaryAction>
                <IconButton 
                  onClick={()=>go('vehicle')}
                  disabled={!switchValueVehicle}
                  style={{marginRight:'-2rem'}}
                >
                  <EditIcon/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        </Grid>




        {/*  Companions box  */}


        <Grid item xs={12}
          style={{
            width:'100%', 
            maxWidth:'444px', 
            minWidth:'0', 
            marginLeft: 'auto',
            marginRight:'auto', 
            display: 'block',
            paddingLeft:'14px',
            paddingRight:'14px', 
          }}
        >
          <div style={{listStyleType:'none'}}>
            <Box display='flex' justifyContent='space-between' marginTop='2.7vh'>
              <Typography variant='h6'>
                Acompañantes
              </Typography>
              <Switch
                className='check'
                color='primary'
                checked={switchValueCompanions}
                onChange={switchBooleanCompanions}
                onClick={reset}
              />
            </Box>

            <ListItem disabled={!switchValueCompanions} disableGutters style={{marginTop:'-0.5vh'}}>
              <ListItemAvatar>
                <Avatar variant='square' style={{border:`${!switchValueCompanions ? '1px solid #c5c5c5' : 'none'}`, boxShadow:`${companionsTravel ? '0px 3px 10px 4px grey' : 'none'}`, borderRadius:'5px', backgroundColor:'white', color:'black', transform:'scale(0.8)'}}>
                  <Button 
                    onClick={handleDecrease}
                    disabled={!switchValueCompanions}
                  >
                    <RemoveIcon fontSize='large'/>
                  </Button>
                </Avatar>
              </ListItemAvatar>
              <ListItemAvatar>
                <Avatar variant='square' 
                  style={{borderRadius:'5px', 
                    backgroundColor:'white', color:'black', 
                    border:`1px solid ${!switchValueCompanions ? '#c5c5c5' : 'black'}`, 
                    transform:'scale(1)'}}>
                  <Box>
                    <Typography variant='h5' 
                      style={{
                        color:`${!switchValueCompanions ? '#c5c5c5' : 'black'}`, 
                        transform:'scale(1.1)'
                      }}>
                      {counterValue}
                    </Typography>
                  </Box>
                </Avatar>
              </ListItemAvatar>
              <ListItemAvatar>
                <Avatar variant='square' style={{border:`${!switchValueCompanions ? '1px solid #c5c5c5' : 'none'}`, boxShadow:`${companionsTravel ? '0px 3px 10px 4px grey' : 'none'}`, borderRadius:'5px', backgroundColor:'white', color:'black', transform:'scale(0.8)'}}>
                  <Button 
                    onClick={handleIncrease}
                    disabled={!switchValueCompanions}
                  >
                    <AddIcon fontSize='large'/>
                  </Button>
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </div>
        </Grid>




        {/*  Next page  

             Clicking on either one will 
             switch you to the next page
             and Submit data to the store  */}




        {/*  Favourite button  */}


        <Grid item xs={12}
          style={{
            position: 'fixed',
            width:'100%', 
            maxWidth:'396px', 
            minWidth:'0', 
            paddingLeft:'17px', 
            paddingRight:'17px',
            left: '50%',
            top: '81%',
            transform: 'translate(-50%, -50%)'}}
        >
          <Button
            onClick={handleNextPage}
            endIcon={<StarBorderIcon fontSize='large' style={{color:'#f4b42a', transform:'scale(1.3)'}}/>}
            className='fav'

            style={{
              boxShadow:'0px 3px 10px 1px lightGrey',
              border:'none'}}
            color='primary'
            variant='outlined'
            fullWidth
          >
            Recordar en favoritos 
          </Button>
        </Grid>

      </Container>





      {/*  Next page button  */}


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
          Listo 
        </Button>
      </Grid>
    </>
  )
}
