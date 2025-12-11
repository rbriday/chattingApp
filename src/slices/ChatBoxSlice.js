import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem('chatBoxInfo') ? JSON.parse(localStorage.getItem('chatBoxInfo')) : ''
};

export const chatBoxSlice = createSlice({
  name: "chatbox",
  initialState,
  reducers: {
    chatBoxInfo: (state, action) => {
      state.value = action.payload;
      const demo = {...state.value}
      localStorage.setItem('chatBoxInfo', JSON.stringify(demo))
    },
  },
});

// Action creators are generated for each case reducer function
export const { chatBoxInfo } = chatBoxSlice.actions;

export default chatBoxSlice.reducer;
