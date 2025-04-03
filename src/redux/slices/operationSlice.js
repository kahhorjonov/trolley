import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockOperations } from "../../mockData";

export const fetchOperations = createAsyncThunk(
  "operations/fetchOperations",
  async ({ page, sort }) => {
    let data = [...mockOperations];

    if (sort) {
      data.sort((a, b) => {
        if (sort === "operationTimestampUtc") {
          return (
            new Date(a.operationTimestampUtc) -
            new Date(b.operationTimestampUtc)
          );
        }
        return a[sort] > b[sort] ? 1 : -1;
      });
    }

    const pageSize = 25;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);

    return {
      data: paginatedData,
      total: data.length,
    };
  }
);

const operationSlice = createSlice({
  name: "operations",
  initialState: {
    data: [],
    loading: false,
    currentPage: 1,
    total: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOperations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOperations.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchOperations.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setPage } = operationSlice.actions;
export default operationSlice.reducer;
