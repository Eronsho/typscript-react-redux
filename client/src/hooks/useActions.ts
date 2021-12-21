import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UseActionCreators from "../store/action-creators/device";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UseActionCreators, dispatch);
};
