import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer} from './Reducer/userReducer';
import { sessionReducer, sessionService } from 'redux-react-session' 

const reducer = combineReducers({
    userLogin : userLoginReducer,
    session : sessionReducer
})

const inistialState = {}

const middleware = [thunk];

const store = createStore(
    reducer, 
    inistialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

sessionService.initSessionService(store)

export default store