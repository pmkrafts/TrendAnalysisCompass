// types/index.ts
export type ComponentName = 'dashboard' | 'analytics' | 'settings' | 'profile';
export type PageName = 'home' | 'workspace' | 'admin' | 'reports';

export interface PageConfig {
    [key: string]: ComponentName[];
}

export interface PageState {
    currentPage: PageName;
    pageConfig: PageConfig;
    loading: boolean;
    error: string | null;
}