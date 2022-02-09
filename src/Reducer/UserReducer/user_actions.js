import user_types from './user_types';

export const addUserId = payload => ({
  type: user_types.USER_ID,
  payload,
});
