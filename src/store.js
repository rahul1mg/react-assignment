import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(initialState={ApplyReducer: {data: {name:"",email:"",cl:""}}}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}