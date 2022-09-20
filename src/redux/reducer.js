// import {ActionTypes} from './constants';

// const initialState = {
//   message: 'Default',
// };

// export const messageReducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case ActionTypes.SET_MESSAGE:
//       return {
//         ...state,
//         message: payload,
//       };
//     default:
//       return state;
//   }
// };

import {createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Default message',
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
      return state;
    },
  },
});

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;
