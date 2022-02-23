import {createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    roomId: null,
    userId: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
    userDetails : (state, action) => {
      state.userId = action.payload.userId;
    }
    
  },
  
});

export const {enterRoom, userDetails} = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;
export const selectUserId = (state) => state.app.userId;



export default appSlice.reducer;
