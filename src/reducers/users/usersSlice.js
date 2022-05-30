import { createSlice } from '@reduxjs/toolkit';

const findMaxId = state => {
    const maxId = state.users.reduce((maxId, user) => Math.max(user.id, maxId), -1);

    return maxId + 1;
}
    
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        fetchUsers: (state, action) => {
            state.users = [...state.users, ...action.payload]
        },
        addNewUser: (state, action) => {
            state.users = [...state.users, { ...action.payload, id: findMaxId(state) }]
        },
        addUserLike: (state, action) => {
            state.users = [
                ...state.users.map(user => user.id === action.payload 
                    ? { ...user, likes: user.likes + 1 } 
                    : user
                )
            ]
        }
    }
})

export const { fetchUsers, addNewUser, addUserLike } = usersSlice.actions;
export default usersSlice.reducer;