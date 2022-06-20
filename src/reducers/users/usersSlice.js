import { createSlice, current } from '@reduxjs/toolkit';

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
            state.users = [...state.users, { ...action.payload, userId: findMaxId(state) }]
        },
        addUserToFavorite: (state, action) => {

        },
        addUserLike: (state, action) => {
            state.users = [
                ...state.users.map(user => user.userId === action.payload 
                    ? { ...user, likes: user.likes + 1 } 
                    : user
                )
            ]
        },
        addStarRating: (state, action) => {
            const { userId, id, stars } = action.payload;

            const existingUser = [...state.users].find(user => user.userId === userId);

            if (existingUser) {
                existingUser.top.map(jrpg => {
                    if (jrpg.id === id) {
                        jrpg.rating = stars;                    
                    } 
                    
                    return jrpg;
                })
            }

            state.users = [...state.users]
                .map(user => user.userId === existingUser.userId ? existingUser : user);
        }
    }
})

export const { 
    fetchUsers, addNewUser, addUserToFavorite, addUserLike, addStarRating 
} = usersSlice.actions;

export default usersSlice.reducer;