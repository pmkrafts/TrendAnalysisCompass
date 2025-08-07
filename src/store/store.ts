import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice'
import tabReducer from './features/componentRegistry/tabsSlice';

export const store = configureStore({
    reducer: {
        userReducer,
        tabs: tabReducer,
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