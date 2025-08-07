import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';
import type { ComponentName, TabName } from '../../../../types/components/index';

export const selectTabState = (state: RootState) => state.tabs;
export const selectCurrentTab = (state: RootState) => state.tabs.currentTab;
export const selectTabConfig = (state: RootState) => state.tabs.tabConfig;
export const selectLoading = (state: RootState) => state.tabs.loading;
export const selectError = (state: RootState) => state.tabs.error;


export const selectComponentsForCurrentTab = createSelector(
    [selectCurrentTab, selectTabConfig],
    (currentTab, tabConfig) => tabConfig[currentTab] || []
);

export const selectComponentsForTab = (tab: TabName) =>
    createSelector(
        [selectTabConfig],
        (tabConfig) => tabConfig[tab] || []
    );

export const selectTabsContainingComponent = (component: ComponentName) =>
    createSelector(
        [selectTabConfig],
        (tabConfig) =>
            Object.keys(tabConfig).filter(tab =>
                tabConfig[tab].includes(component)
            ) as TabName[]
    );
