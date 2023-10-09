const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    logging: false,
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.logging = true;
    },

    loginSuccess: (state, action) => {
      state.logging = false;
      state.currentUser = action.payload;
    },

    loginFaled: (state, action) => {
      state.logging = false;
    },

    logout: (state) => {
      state.isLogged = false;
      state.currentUser = null;
    },
  },
});
const authReducer = authSlice.reducer;

// export action
export const authAction = authSlice.actions;

// export select
export const selectIsLogging = (state) => state.auth.logging;
export const selectCurrentUser = (state) => state.auth.currentUser;

// export default reducer
export default authReducer;
