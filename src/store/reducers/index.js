import {combineReducers} from 'redux';
import authReducer from './authReducers'
import uiReducer from './uiReducers';

const rootReducer = combineReducers({auth: authReducer, ui: uiReducer});

export default rootReducer;