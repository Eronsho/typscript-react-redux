import { useActions } from "./../../hooks/useActions";
import { UserAction } from "./../../types/user";
import { UserState, UserActionTypes } from "../../types/user";

const userState: UserState = {
  user: null,
  loading: false,
  error: null,
};
export const userReducer = (
  state = userState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return {
        user: state.user,
        loading: true,
        error: null,
      };
    case UserActionTypes.FETCH_USER_SUCCESSS:
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return {
        user: state.user,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
