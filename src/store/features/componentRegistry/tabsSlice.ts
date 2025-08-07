/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { ComponentName, TabName, TabConfig, TabState } from '../../../types/components/index';

const initialState: TabState = {
    currentTab: 'home',
    tabConfig: {
        home: ['dashboard', 'analytics'],
        platform: ['settings', 'profile'],
        company: ['dashboard', 'settings'],
        engagement: ['analytics', 'profile'],
    },
    loading: false,
    error: null,
};

export const loadTabConfigAsync = createAsyncThunk(
    'tabs/loadTabConfig',
    async (config: TabConfig, { rejectWithValue }) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            return config;
        } catch (error) {
            return rejectWithValue('Failed to load tab configuration');
        }
    }
);

export const saveTabConfigAsync = createAsyncThunk(
    'tabs/saveTabConfig',
    async (payload: { tab: TabName; components: ComponentName[] }, { rejectWithValue }) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
            return payload;
        } catch (error) {
            return rejectWithValue('Failed to save tab configuration');
        }
    }
);


const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setCurrentTab: (state, action: PayloadAction<TabName>) => {
            state.currentTab = action.payload;
        },

        updateTabConfig: (state, action: PayloadAction<{ tab: TabName; components: ComponentName[] }>) => {
            const { tab, components } = action.payload;
            state.tabConfig[tab] = components;
        },

        addComponentToTab: (state, action: PayloadAction<{ tab: TabName; component: ComponentName }>) => {
            const { tab, component } = action.payload;
            const currentComponents = state.tabConfig[tab] || [];
            if (!currentComponents.includes(component)) {
                state.tabConfig[tab] = [...currentComponents, component];
            }
        },

        removeComponentFromTab: (state, action: PayloadAction<{ tab: TabName; component: ComponentName }>) => {
            const { tab, component } = action.payload;
            state.tabConfig[tab] = state.tabConfig[tab].filter(c => c !== component);
        },

        toggleComponentOnTab: (state, action: PayloadAction<{ tab: TabName; component: ComponentName }>) => {
            const { tab, component } = action.payload;
            const currentComponents = state.tabConfig[tab] || [];
            if (currentComponents.includes(component)) {
                state.tabConfig[tab] = currentComponents.filter(c => c !== component);
            } else {
                state.tabConfig[tab] = [...currentComponents, component];
            }
        },

        moveComponent: (state, action: PayloadAction<{
            fromTab: TabName;
            toTab: TabName;
            component: ComponentName
        }>) => {
            const { fromTab, toTab, component } = action.payload;
            // Remove from source tab
            state.tabConfig[fromTab] = state.tabConfig[fromTab].filter(c => c !== component);
            // Add to destination tab if not already there
            const destComponents = state.tabConfig[toTab] || [];
            if (!destComponents.includes(component)) {
                state.tabConfig[toTab] = [...destComponents, component];
            }
        },

        reorderComponentsOnTab: (state, action: PayloadAction<{
            tab: TabName;
            components: ComponentName[]
        }>) => {
            const { tab, components } = action.payload;
            state.tabConfig[tab] = components;
        },

        resetTabConfig: (state) => {
            state.tabConfig = initialState.tabConfig;
        },

        clearError: (state) => {
            state.error = null;
        },

        bulkUpdateTabs: (state, action: PayloadAction<TabConfig>) => {
            state.tabConfig = { ...state.tabConfig, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            // Load tab config
            .addCase(loadTabConfigAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadTabConfigAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.tabConfig = { ...state.tabConfig, ...action.payload };
            })
            .addCase(loadTabConfigAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Save tab config
            .addCase(saveTabConfigAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveTabConfigAsync.fulfilled, (state, action) => {
                state.loading = false;
                const { tab, components } = action.payload;
                state.tabConfig[tab] = components;
            })
            .addCase(saveTabConfigAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
})

// Export actions
export const {
    setCurrentTab,
    updateTabConfig,
    addComponentToTab,
    removeComponentFromTab,
    toggleComponentOnTab,
    moveComponent,
    reorderComponentsOnTab,
    resetTabConfig,
    clearError,
    bulkUpdateTabs,
} = tabSlice.actions;

export default tabSlice.reducer;