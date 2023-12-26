import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "./api";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.value += action.payload;
    });
    builder.addCase(incrementAsync.pending, (state) => {
      state.status = "loading";
    });
  },
});

export const statusLoading = (state) => state.counter.status === "loading";
export const selectValue = (state) => state.counter.value;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
