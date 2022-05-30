import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import usersReducer from '../reducers/users/usersReducer';
import playlistReducer from '../reducers/playlist/playlistReducer';

const rootReducer = combineReducers({
    usersReducer,
    playlistReducer,
})

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;