import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentMove: 0,
  history: [Array(9).fill(null)],
  size: {
    x: 3,
    y: 3
  },
  turn: "X"
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: state => {
      state.history = [Array(state.size.x * state.size.y).fill(null)];
      state.currentMove = 0;
      state.turn = state.currentMove % 2 ? "O" : "X";
    },
    nextMove: (state, action) => {
      const nextHistory = action.payload.history;
      state.history = nextHistory;
      state.currentMove = nextHistory.length - 1;
      state.turn = state.currentMove % 2 ? "O" : "X";
    },
    setCurrentMove: (state, action) => {
      const currentMove = action.payload;
      state.currentMove = currentMove;
      state.turn = state.currentMove % 2 ? "O" : "X";
    }
  }
});

export const { resetGame, nextMove, setCurrentMove } = gameSlice.actions;

export default gameSlice.reducer;
