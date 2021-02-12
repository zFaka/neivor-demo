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
import BlockIcon from '@material-ui/icons/Block';


// Hooks

import {useDispatch, useSelector} from 'react-redux';
import {useCounter} from '../../hook/useCounter';
import {useSwitch} from '../../hook/useSwitch';
import {useStyle} from '../../hook/useStyle';


// Actions

import {changeIndexPage, sendDataOfPage4} from '../../actions/form';
import Swal from 'sweetalert2';




export const Check = ({navigation}) => {




  // Style Switches


  const classes = useStyle();




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
    switchValueComeInVehicle,
    switchValueCompanions,
    ,
    ,
    switchBooleanCompanions
  ] = useSwitch();




  // handleNextPage when called,
  // dispatches the action which 
  // uploads the data to the store 
  // and goes to the submit page


  const handleNextPage = () => {

    dispatch(sendDataOfPage4(
      switchValueComeInVehicle,
      switchValueCompanions,
      counterValue))

    Swal.fire({
      icon: 'success',
      iconColor:'#3bbfad', 
      title: 'Visita registrada correctamente',
      showConfirmButton: false,
      timer: 1000})

    dispatch(changeIndexPage(5))
    go('submit')


  };




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
          <div style={{listStyleType:'none', marginTop:'5vh'}}>
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
                  <Typography variant='subtitle2'>
                    DNI 
                  </Typography>}
                secondary={
                  <Typography variant='subtitle2'>
                    {dni}
                  </Typography>}
              />
            </ListItem></div>
        </Grid>




        {/*  Vehicle box
        show if use vehicle */}


        {switchValueComeInVehicle && 
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
              <Box display='flex' justifyContent='space-between' marginTop='2vh'>
                <Typography variant='h6'>
                  Vehículo
                </Typography>
              </Box>
              <ListItem disabled={!switchValueComeInVehicle} disableGutters >
                <ListItemAvatar>
                  <Avatar variant='square' style={{borderRadius:'5px', backgroundColor:'#3bbfad', transform:'scale(1.2)', marginLeft:'0.1rem'}}>
                    <Button disabled={!switchValueComeInVehicle}>
                      {   vehicleType.stringValue === 'Going Car' ? <DriveEtaIcon/> : 
                          vehicleType.stringValue === 'Going Bike' ? <DirectionsBikeIcon/> :
                          vehicleType.stringValue === 'Going Motorcycle' ? <MotorcycleIcon/> :
                          <BlockIcon/>}
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
                    disabled={!switchValueComeInVehicle}
                    style={{marginRight:'-2rem'}}
                  >
                    <EditIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          </Grid>
        }




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
            <Box display='flex' justifyContent='space-between' marginTop='3vh'>
              <Typography variant='h6'>
                Acompañantes
              </Typography>
              <Switch
                className='check'
                color='primary'
                checked={switchValueCompanions}
                onChange={switchBooleanCompanions}
                onClick={reset}

                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </Box>

            <ListItem disabled={!switchValueCompanions} disableGutters>
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

      </Container>




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
