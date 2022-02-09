import {template} from '@babel/core';
import user_types from './user_types';
const initialState = {
  user_id: '',
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case user_types.USER_ID:
      return {
        ...state,
        user_id: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
