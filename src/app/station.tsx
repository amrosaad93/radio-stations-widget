import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CurrentStationState {
  station: string;
}

// Define the initial state using that type
const initialState: CurrentStationState = {
  station: "",
};

export const stationSlice = createSlice({
  name: "currentStation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentStation: (state, action: PayloadAction<string>) => {
      state.station = action.payload;
    },
  },
});

export const { setCurrentStation } = stationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStation = (state: RootState) => state.station.station;

export default stationSlice.reducer;
