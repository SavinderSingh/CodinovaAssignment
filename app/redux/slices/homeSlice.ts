import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  studentsList: [],
  loader: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setStudentsList: (state, {payload}) => {
      state.studentsList = payload;
    },
    setLoader: (state, {payload}) => {
      state.loader = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setStudentsList, setLoader} = homeSlice.actions;
export default homeSlice.reducer;
