import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk';

export default initialState => createStore(rootReducer, initialState, applyMiddleware(thunk));
