import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
}; 

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
        console.log('User data received:', action.payload.user); // Debug log
        state.user = {
            ...action.payload.user,
            role: action.payload.user.role // Ensure role is explicitly set
        };
        state.isAuthenticated = true;
    },
    userLoggedOut:(state) => {
        state.user = null;
        state.isAuthenticated = false;
    }
  },
});

export const {userLoggedIn, userLoggedOut} = authSlice.actions;

// Selector to get user role
export const selectUserRole = (state) => state.auth.user?.role;

export default authSlice.reducer;
