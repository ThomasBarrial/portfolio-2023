import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store"; // Assuming you have a configured Redux store

type ClickedState = number | null;

const initialState: ClickedState = null;

enum ActionType {
  SetClicked = "SET_CLICKED",
  ClearClicked = "CLEAR_CLICKED",
}

interface SetClickedAction {
  type: ActionType.SetClicked;
  payload: ClickedState;
}

interface ClearClickedAction {
  type: ActionType.ClearClicked;
}

type MyAction = SetClickedAction | ClearClickedAction;

const clickedSlice = createSlice({
  name: "clicked",
  initialState,
  reducers: {
    setClicked: (state, action: PayloadAction<ClickedState>) => {
      return action.payload;
    },
    clearClicked: (state) => {
      return null;
    },
  },
});

export const { setClicked, clearClicked } = clickedSlice.actions;

export const useClickedFromStore = (): {
  clicked: ClickedState;
  dispatchSetClicked: (value: ClickedState) => void;
  dispatchClearClicked: () => void;
} => {
  const clicked = useSelector((state: RootState) => state.clicked);
  const dispatch = useDispatch<AppDispatch>();
  const dispatchSetClicked = (value: ClickedState) =>
    dispatch(setClicked(value));
  const dispatchClearClicked = () => dispatch(clearClicked());
  return { clicked, dispatchSetClicked, dispatchClearClicked };
};

export default clickedSlice.reducer;
