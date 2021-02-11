import React from 'react';


// Components 

import {useStep} from 'react-hooks-helper';
import {Personal} from './stepForm/Personal';
import {Public} from './stepForm/Public';
import {Vehicle} from './stepForm/Vehicle';
import {Check} from './stepForm/Check';
import {Submit} from './stepForm/Submit';
import {NavBar} from './stepForm/NavBar';




// Create steps for stepper


const steps = [
  {id:'personal'}, 
  {id:'public'}, 
  {id:'vehicle'}, 
  {id:'check'}, 
  {id:'submit'}, 
];




// Create multiple step formulary component


export const MultiStepForm = () => {




  // Setup the useStep()


  const {step, navigation} = useStep({
    steps, 
    initialStep:0
  });
  let nav = {navigation};




  // Pass the nav function to the 
  // pages components and navBar


  switch (step.id) {
    case 'personal':
      return <>
        <NavBar   {...nav}/>
        <Personal {...nav}/>
      </>;
    case 'public':
      return <>
        <NavBar {...nav}/>
        <Public {...nav}/>
      </>;
    case 'vehicle':
      return <>
        <NavBar  {...nav}/>
        <Vehicle {...nav}/>;
      </>;
    case 'check':
      return <>
        <NavBar {...nav}/>
        <Check  {...nav}/>;
      </>;
    case 'submit':
      return <>
        <NavBar {...nav}/>
        <Submit {...nav}/>;
      </>;
    default:
  };


}
