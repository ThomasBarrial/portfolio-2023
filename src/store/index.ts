import { configureStore } from "@reduxjs/toolkit";

import isLoaderReducer from "./isLoader.slice";

export const store = configureStore({
  reducer: {
    isLoader: isLoaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

// Redux dependencies types

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
