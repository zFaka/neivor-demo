import {makeStyles} from '@material-ui/styles';




// Material UI custom style of components


export const useStyle = makeStyles({
  root: {
    width: 56,
    padding:0, 
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(28px)',
      color:'white',
      '& + $track': {
        backgroundColor: '#3bbfad',
        opacity: 1,
        border:'none'
      },
    },
    '&$focusVisible $thumb': {
      color: '#707070',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    boxShadow:'0px 3px 3px 1px #dedede', 
    backgroundColor: '#707070',
    borderRadius: '100px',
    marginTop:'1.5px', 
    marginLeft: '2px', 
    height: 24,
    opacity: 1,
  },
  cssLabel: {
    marginTop:'-6px',
  },
  checked: {},
  focusVisible: {},
})
