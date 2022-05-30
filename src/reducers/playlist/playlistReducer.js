import { FETCH_MUSIC } from '../../constants/constants';

const initialState = {
    playlist: [],
}

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MUSIC:
            return {
                ...state,
                playlist: [...state.playlist, ...action.payload],
            };
        default: 
            return state;
    }
}

export const fetchMusic = payload => ({ type: FETCH_MUSIC, payload });

export default playlistReducer;