import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {rootReducer} from '../reducer/rootReducer';



//To enable Redux DevTools Extension

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



//Create a store to hold the state tree

export const store = createStore(



    // Here the main reducer is placed 

    rootReducer,



    // Apply middleware to do asyncronous tasks

    composeEnhancers(
        applyMiddleware( thunk )
    )



);
