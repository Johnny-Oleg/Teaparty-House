import { createSlice } from '@reduxjs/toolkit';

const playlistSlice =  createSlice({
    name: 'playlist',
    initialState: {
        playlist: []
    },
    reducers: {
        fetchMusic: (state, action) => {
            state.playlist = [...state.playlist, ...action.payload]
        }
    }
})

export const { fetchMusic } = playlistSlice.actions;
export default playlistSlice.reducer;