import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slices/userSlice'
import  chatBoxSlice  from './slices/ChatBoxSlice'

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    chatBoxInfo: chatBoxSlice,
  },
})