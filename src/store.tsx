import { configureStore } from '@reduxjs/toolkit';
// import your reducer here

// const rootReducer = combineReducers({ your reducer here }); TODO

const store = configureStore({
  reducer: {}, // put rootReducer here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
