import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';
import {changeIndexPage} from '../../actions/form';




//  Create Nav Bar


export const NavBar = ({navigation}) => {




  // Destructiring go function 


  const {go} = navigation;




  // Leave the state values handy 


  const {comeInVehicle} = useSelector(state=>state.form);
  const {pageIndex} = useSelector(state=>state.form);




  // Leave functions handy


  const dispatch = useDispatch();




  const handleBackPage = () => {


    // Conditional back pages


    //click in page 1     PERSONAL 
    if(pageIndex===1){
      Swal.fire({
        title: 'No te vayas!',
        text: 'Completa el formulario porfavor',
        imageUrl: 'https://media.giphy.com/media/3orif3HlX3i4fDdqCY/giphy.gif',
        imageAlt: 'Form GIF',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false
      })
    }

    //after click in page 2   DATES
    if(pageIndex===2){
      go('personal')
      dispatch(changeIndexPage(1))
    }

    //after click in page 3   VEHICLE
    else if(pageIndex===3){
      go('public')
      dispatch(changeIndexPage(2))
    }

    //after click in page 4    CHECK
    else if(pageIndex===4){
      if(!comeInVehicle){
        go('public')
        dispatch(changeIndexPage(2))
      }
      else 
        if(comeInVehicle){
          go('vehicle')
          dispatch(changeIndexPage(3))
        }
    } 
  };




  return (
    <AppBar color='secondary' position="static" style={{letterSpacing:'1px', boxShadow:'0px -15px 30px 7px black'}}>
      <Toolbar>




        {/*  When icon button is clicked 
           you go to the back page        */}

        {/*  Only show back button 
             before finish the registration  */}

        { pageIndex !== 5 && 

          <IconButton edge="start" color="inherit" aria-label="back" 
            style={{marginLeft:'-1rem'}}
            onClick={handleBackPage}
          >
            <ArrowBack 
              fontSize='large'/>
          </IconButton>}


        <Typography variant="h6">
          Registrar Visita
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
