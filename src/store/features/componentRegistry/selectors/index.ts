import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';
import type { ComponentName, PageName } from '../../../../types/components/index';

export const selectPageState = (state: RootState) => state.pages;
export const selectCurrentPage = (state: RootState) => state.pages.currentPage;
export const selectPageConfig = (state: RootState) => state.pages.pageConfig;
export const selectLoading = (state: RootState) => state.pages.loading;
export const selectError = (state: RootState) => state.pages.error;


export const selectComponentsForCurrentPage = createSelector(
    [selectCurrentPage, selectPageConfig],
    (currentPage, pageConfig) => pageConfig[currentPage] || []
);

export const selectComponentsForPage = (page: PageName) =>
    createSelector(
        [selectPageConfig],
        (pageConfig) => pageConfig[page] || []
    );

export const selectPagesContainingComponent = (component: ComponentName) =>
    createSelector(
        [selectPageConfig],
        (pageConfig) =>
            Object.keys(pageConfig).filter(page =>
                pageConfig[page].includes(component)
            ) as PageName[]
    );
