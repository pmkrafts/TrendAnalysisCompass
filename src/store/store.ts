import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice'
import pageReducer from './features/componentRegistry/pageSlice';

export const store = configureStore({
    reducer: {
        userReducer,
        pages: pageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;