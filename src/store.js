import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import usersReducer from './reducers/users/usersReducer';
import playlistReducer from './reducers/playlist/playlistReducer';

const rootReducer = combineReducers({
    usersReducer,
    playlistReducer,
})

// const initialState = {
//     users: [],
//     playlist: [],
// };

const middleware = [thunk];

const store = createStore(
    rootReducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// store.subscribe(store => console.log(store.getState()));

export default store;