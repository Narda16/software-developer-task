import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "store",
  initialState: {
    users: [],
    user: {},
    permissions: [],
  },
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload.users;
    },
    setUser(state, { payload }) {
      state.user = payload.user;
    },
    setPermissions(state, { payload }) {
      state.permissions = payload.permissions;
    },
  },
});

export const storeConfiguration = configureStore({
  reducer: { store: store.reducer },
});

export const actions = store.actions;
