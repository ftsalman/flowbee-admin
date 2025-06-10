 import { createSlice } from '@reduxjs/toolkit'


 
const initialState = {
  isSiderbarOpen: false,
  isSiderbarCollapsed: false,
};

const sidebarSlice = createSlice({
 name: "siderbar",
  initialState,
  reducers: {
    toggleSiderbar: (state, { payload = null }) => {
      if (!state.isSiderbarOpen) {
        state.isSiderbarCollapsed = true;
      }

      if (payload) {
        state.isSiderbarOpen = payload;
        return;
      }
      state.isSiderbarOpen = !state.isSiderbarOpen;
    },
    toggleSiderbarCollapsed: (state, { payload = null }) => {
      if (payload) {
        state.isSiderbarCollapsed = payload;
        return;
      }
      state.isSiderbarCollapsed = !state.isSiderbarCollapsed;
    },
  },
})

export const { toggleSiderbar, toggleSiderbarCollapsed } = sidebarSlice.actions;

export default sidebarSlice.reducer;