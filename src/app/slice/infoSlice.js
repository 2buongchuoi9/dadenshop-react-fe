const { createSlice } = require('@reduxjs/toolkit');

const infosSlice = createSlice({
  name: 'info',
  initialState: {
    id: 1,
    name: '',
    address: '',
    phoneBuy: '',
    phoneBaoHanh: '',
    phoneKhieuNai: '',
    logos: [],
    slide: [],
  },
  reducers: {
    get: (state, action) => {
      console.log({ action });
      const { ...a } = action.payload;
      return {
        ...state,
        ...a,
      };
    },
  },
});

const infosReducer = infosSlice.reducer;

// export action
export const infosAction = infosSlice.actions;
// eport default reducer
export default infosReducer;
