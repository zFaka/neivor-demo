import React from 'react';
import Container from '@material-ui/core/Container';
import {Grid, IconButton, Typography} from '@material-ui/core';
import QRCode from 'qrcode.react';
import {useSelector} from 'react-redux';


//Icons

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GetAppIcon from '@material-ui/icons/GetApp';
import DraftsIcon from '@material-ui/icons/Drafts';




export const Submit = () => {




  //Extract complete Name and DNI from state


  const {fullName, dni} = useSelector(state=>state.form);




  // Download QRCode in a PNG image 


  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink)};




  // Share url link for WhatsApp


  const shareForWhatsapp = () => {
    let downloadLink = document.createElement("a");
    downloadLink.href = 'whatsapp://send?text=QRCode url';
    downloadLink.dataAction = "share/whatsapp/share";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink)};




  // Share url link for Email


  const shareForEmail = () => {
    window.location.href = `mailto:?subject=QRCode&body=${`QRCode url`}`};



  return (
    <>



      {/*  Progress Bar  */}


      <div className='progress5 progress-bar'/>




        {/*  Form finished header  */}


          <Typography
            align='center'
            style={{letterSpacing:'1.5px', fontWeight:'600', marginBottom:'0vh', marginTop:'3.6vh', fontSize:'5vh', color:'#4b4f54'}}
          >
            ¡{fullName.replace(/ .*/,'')} ya está listo!
          </Typography>

      <div
          style={{
            width:'85%', 
            maxWidth:'70vw', 
            minWidth:'0', 
            marginLeft: 'auto',
            marginRight:'auto', 
            display: 'block',
            paddingLeft:'10px',
            paddingRight:'10px', 
          }}
      >
          <Typography
            align='center'
            style={{fontWeight:'500', fontSize:'2.2vh', color:'#66696d'}}
          >
            Necesitara este codigo para poder ingresar al condominio, recuerda enviarlo
          </Typography>
      </div>




      <Container maxWidth='xs'>




        {/*  Generate QRCode  */}


        <div style={{display:'flex', justifyContent:'center', marginTop:'6vh'}}>
          <QRCode 
            size={246}
            id={`${fullName}${dni}`} 
            level={"H"}
            value={JSON.stringify({fullName, dni})}/>
        </div>




        {/*  Buttons of WhatsApp,
             Download, Email       */}


        <div style={{display:'flex', justifyContent:'space-around', marginTop:'5.5vh'}}>
          <div>




            {/*  Open Whatapp share option
                 with a custom messagge     */}


            <IconButton onClick={shareForWhatsapp}>
              <WhatsAppIcon 
                fontSize='large'
                style={{color:'black', transform:'scale(1.3)'}}/>
            </IconButton>




            {/*  Download the QRCode 
                 in a PNG Image       */}


            <IconButton onClick={downloadQR}>
              <GetAppIcon 
                fontSize='large'
                style={{color:'black', transform:'scale(1.3)'}}/>
            </IconButton>




            {/*  Open the email with a 
                 custom subject and body  */}


            <IconButton onClick={shareForEmail}>
              <DraftsIcon 
                fontSize='large'
                style={{color:'black', transform:'scale(1.3)'}}/>
            </IconButton>



          </div>
        </div>

      </Container>
    </>
  )}
