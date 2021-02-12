import {MultiStepForm} from "./components/MultiStepForm";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import { Provider } from 'react-redux';
import { store } from './store/store';


// pick a date util library
import DateFnsUtils from '@date-io/date-fns';




// Material UI main styles 


const theme = createMuiTheme({

  typography: {
    "fontFamily": `"Jost"`, 
    button:{
      textTransform:'none', 
      fontSize:'1.2rem', 
      fontWeight:'500', 
      letterSpacing:'1px',
      lineHeight:'1.75rem', 
    }
  }, 
  palette:{
    primary:{
      main:'#ff595a'
    }, 
    secondary:{
      main:'#ff7172', 
      contrastText:'#fff'
    }
  }, 
  cssLabel: {
    marginTop:'-6px',
  },
})



// This functions provide theme,
// the picker utils and the
// tree state to all the components

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={ store }>
          <MultiStepForm/> 
        </Provider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}

export default App
