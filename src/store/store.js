import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../reducers/users/usersSlice';
import playlistReducer from '../reducers/playlist/playlistSlice';
import botReducer from '../reducers/bot/botSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        playlist: playlistReducer,
        bot: botReducer
    }
})

export default store;