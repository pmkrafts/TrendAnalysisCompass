/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { ComponentName, PageName, PageConfig, PageState } from '../../../types/components/index';

const initialState: PageState = {
    currentPage: 'home',
    pageConfig: {
        home: ['dashboard', 'analytics'],
        workspace: ['settings', 'profile'],
        admin: ['dashboard', 'settings'],
        reports: ['analytics', 'profile'],
    },
    loading: false,
    error: null,
};

export const loadPageConfigAsync = createAsyncThunk(
    'pages/loadPageConfig',
    async (config: PageConfig, { rejectWithValue }) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            return config;
        } catch (error) {
            return rejectWithValue('Failed to load page configuration');
        }
    }
);

export const savePageConfigAsync = createAsyncThunk(
    'pages/savePageConfig',
    async (payload: { page: PageName; components: ComponentName[] }, { rejectWithValue }) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
            return payload;
        } catch (error) {
            return rejectWithValue('Failed to save page configuration');
        }
    }
);


const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<PageName>) => {
            state.currentPage = action.payload;
        },

        updatePageConfig: (state, action: PayloadAction<{ page: PageName; components: ComponentName[] }>) => {
            const { page, components } = action.payload;
            state.pageConfig[page] = components;
        },

        addComponentToPage: (state, action: PayloadAction<{ page: PageName; component: ComponentName }>) => {
            const { page, component } = action.payload;
            const currentComponents = state.pageConfig[page] || [];
            if (!currentComponents.includes(component)) {
                state.pageConfig[page] = [...currentComponents, component];
            }
        },

        removeComponentFromPage: (state, action: PayloadAction<{ page: PageName; component: ComponentName }>) => {
            const { page, component } = action.payload;
            state.pageConfig[page] = state.pageConfig[page].filter(c => c !== component);
        },

        toggleComponentOnPage: (state, action: PayloadAction<{ page: PageName; component: ComponentName }>) => {
            const { page, component } = action.payload;
            const currentComponents = state.pageConfig[page] || [];
            if (currentComponents.includes(component)) {
                state.pageConfig[page] = currentComponents.filter(c => c !== component);
            } else {
                state.pageConfig[page] = [...currentComponents, component];
            }
        },

        moveComponent: (state, action: PayloadAction<{
            fromPage: PageName;
            toPage: PageName;
            component: ComponentName
        }>) => {
            const { fromPage, toPage, component } = action.payload;
            // Remove from source page
            state.pageConfig[fromPage] = state.pageConfig[fromPage].filter(c => c !== component);
            // Add to destination page if not already there
            const destComponents = state.pageConfig[toPage] || [];
            if (!destComponents.includes(component)) {
                state.pageConfig[toPage] = [...destComponents, component];
            }
        },

        reorderComponentsOnPage: (state, action: PayloadAction<{
            page: PageName;
            components: ComponentName[]
        }>) => {
            const { page, components } = action.payload;
            state.pageConfig[page] = components;
        },

        resetPageConfig: (state) => {
            state.pageConfig = initialState.pageConfig;
        },

        clearError: (state) => {
            state.error = null;
        },

        bulkUpdatePages: (state, action: PayloadAction<PageConfig>) => {
            state.pageConfig = { ...state.pageConfig, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            // Load page config
            .addCase(loadPageConfigAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadPageConfigAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.pageConfig = { ...state.pageConfig, ...action.payload };
            })
            .addCase(loadPageConfigAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Save page config
            .addCase(savePageConfigAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(savePageConfigAsync.fulfilled, (state, action) => {
                state.loading = false;
                const { page, components } = action.payload;
                state.pageConfig[page] = components;
            })
            .addCase(savePageConfigAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
})

// Export actions
export const {
    setCurrentPage,
    updatePageConfig,
    addComponentToPage,
    removeComponentFromPage,
    toggleComponentOnPage,
    moveComponent,
    reorderComponentsOnPage,
    resetPageConfig,
    clearError,
    bulkUpdatePages,
} = pageSlice.actions;

export default pageSlice.reducer;