import { combineReducers } from 'redux';
import { formReducer } from './formReducer';



//  With combineReducers we can combine 
//  reducers to have a main reducer to 
//  use in the createstore


export const rootReducer = combineReducers({


    // You can add more reducers to share state
    // auth: authReducer, 
    // wspp: wsppReducer, 
    
    
    form: formReducer,  


})
