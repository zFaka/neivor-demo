import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import React from 'react';




      //  Create Nav Bar


export const NavBar = ({navigation}) => {
  return (
    <AppBar color='secondary' position="static" style={{letterSpacing:'1px', boxShadow:'0px -15px 30px 7px black'}}>
      <Toolbar>




      {/*  When icon button is clicked 
           you go to the back page      */}


        <IconButton edge="start" color="inherit" aria-label="back" 
          style={{marginLeft:'-1rem'}}
          onClick={()=>navigation.previous()}
        >
          <ArrowBack 
            fontSize='large'/>
        </IconButton>
        <Typography variant="h6">
          Registrar Visita
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
