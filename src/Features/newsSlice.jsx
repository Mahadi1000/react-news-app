import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create news action
export const createNews = createAsyncThunk(
    "createNews",
    async (data, { rejectWithValue }) => {
      console.log("data", data);
      const response = await fetch(
        "https://660879baa2a5dd477b148346.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );



  //read news action
    export const showNews = createAsyncThunk(
    "showNews",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        "https://660879baa2a5dd477b148346.mockapi.io/crud"
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const newsDetails = createSlice({
    name: "newsDetails",
    initialState: {
      users: [],
      loading: false,
      error: null,
      searchData: [],
    },
  
    reducers: {
      searchUser: (state, action) => {
        console.log(action.payload);
        state.searchData = action.payload;
      },
    },
    extraReducers: {
        [createNews.pending]: (state) => {
          state.loading = true;
        },
        [createNews.fulfilled]: (state, action) => {
          state.loading = false;
          state.news.push(action.payload);
        },
        [createNews.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },

        [showNews.pending]: (state) => {
            state.loading = true;
          },
          [showNews.fulfilled]: (state, action) => {
            state.loading = false;
            state.news = action.payload;
          },
          [showNews.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
      },

})


  export const { searchUser } = newsDetails.actions;
  export default newsDetails.reducer;