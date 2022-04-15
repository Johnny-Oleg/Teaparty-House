import {
    FETCH_USERS,
    ADD_NEW_USER,
    SORT_USERS,
    ADD_USER_LIKE,
} from '../../constants/constants';

const initialState = {
    users: [],
};

const findMaxId = state => {
    const maxId = state.users.reduce((maxId, user) => Math.max(user.id, maxId), -1);

    return maxId + 1;
}
    
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state, 
                users: [...state.users, ...action.payload]
            };
        case ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, { ...action.payload, id: findMaxId(state) }]
            };
        case SORT_USERS:
            return {};
        case ADD_USER_LIKE:
            return {
                ...state,
                users: [
                    ...state.users.map(user => {
                        if (user.id === action.payload.id) {
                            user.likes = action.payload.likes;
                        }

                        return user;
                    }),
                ],
            };
        default:
            return state;
    }
};

export const fetchUsers = payload => ({ type:FETCH_USERS, payload })
export const addNewUser = payload => ({ type:ADD_NEW_USER, payload })
export const addUserLike = payload => ({ type:ADD_USER_LIKE, payload })

export default usersReducer;