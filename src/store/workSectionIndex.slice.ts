import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial
const initialState = 0;

// Création d'une tranche (slice) Redux
const workSectionIndexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    // Action pour incrémenter l'index
    incrementIndex: (state) => state + 1,

    // Action pour décrémenter l'index
    decrementIndex: (state) => state - 1,

    // Action pour définir une valeur spécifique de l'index
    setIndex: (state, action) => action.payload,
  },
});

// Export des actions
export const { incrementIndex, decrementIndex, setIndex } =
  workSectionIndexSlice.actions;

// Export du reducer
export default workSectionIndexSlice.reducer;
