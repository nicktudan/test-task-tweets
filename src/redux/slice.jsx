import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const usersInitialState = { items: [], isLoading: false, error: null };

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,

    extraReducers: builder => {
        builder
          .addCase(fetchUsers.pending, state => {
            state.isLoading = true;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
    },
})

export const usersReducer = usersSlice.reducer;