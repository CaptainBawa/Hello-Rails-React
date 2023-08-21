import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable */
const initialState = {
  greeting: '',
  error: null,
};

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  try {
    const response = await fetch('/api/random_greeting');
    const data = await response.json();
    return data.greeting;
  } catch (error) {
    return error.message;
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getGreetings.fulfilled,
      (state, action) => {
        state.greeting = action.payload;
      },
    );
    builder.addCase(
      getGreetings.rejected,
      (state, action) => {
        state.error = action.error.message;
      },
    );
  },
});

export default greetingsSlice.reducer;