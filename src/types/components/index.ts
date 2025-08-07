export type ComponentName = 'dashboard' | 'analytics' | 'settings' | 'profile';
export type TabName = 'home' | 'platform' | 'company' | 'engagement';
export type InternalHomeTabName = 'tiktok' | 'instagram' | 'youtube' | 'twitter' | 'megamart' | 'kingbakers' | 'smoothfuel' | 'views' | 'likes' | 'shares' | 'comments' | 'trending';

export interface TabConfig {
    [key: string]: ComponentName[];
}

export interface TabState {
    currentTab: TabName;
    tabConfig: TabConfig;
    loading: boolean;
    error: string | null;
}