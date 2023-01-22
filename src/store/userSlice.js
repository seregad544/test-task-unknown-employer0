import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'guest',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorization: (state) => {
      state.name = 'developer21';
    },
  },
});

export const selectUserName = (state) => state.user.name;

export const { authorization } = userSlice.actions;

export default userSlice.reducer;