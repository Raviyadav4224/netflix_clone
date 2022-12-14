import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  { myListItems: [] },
  {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.message = action.payload.message;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = action.payload;
    },
    loadAllUsersRequest: (state) => {
      state.loading = true;
    },
    loadAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.allUsersInfo = action.payload;
      state.message = action.payload.message;
    },
    loadAllUsersFail: (state, action) => {
      state.loading = false;
      state.allUsersInfo = action.payload;
      state.error = action.payload;
    },
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
      state.userInfo = action.payload;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.userInfo = null;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
      state.userInfo = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.userInfo = null;
    },
    logOutRequest: (state) => {
      state.loading = true;
    },
    logOutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
      state.userInfo = null;
    },
    logOutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    addToMyListSuccess:(state)=>{
      state.message="Added Successfully"
    },
    addToMyList: (state, action) => {
      const movie = action.payload;
      const movieExists = state.myListItems.find((i) => i.id === movie.id);
      if (!movieExists) {
        state.myListItems.push(movie);
      }
    },
    removeFromMyList: (state, action) => {
      const movieId = action.payload;
      console.log('id is ',movieId);
      state.myListItems = state.myListItems.filter((i) => i.id !== movieId);
    },
    removeFromMyListSuccess:(state)=>{
      state.message="Removed Successfully"
    },
  }
);
