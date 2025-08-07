import { useAppDispatch, useAppSelector } from '../../hooks/redux/index';
import {
    setCurrentTab,
    addComponentToTab,
    loadTabConfigAsync,
    removeComponentFromTab,
    updateTabConfig,
    reorderComponentsOnTab,
    toggleComponentOnTab,
    resetTabConfig,
} from '../../store/features/componentRegistry/tabsSlice';
import {
    selectCurrentTab,
    selectComponentsForCurrentTab,
    selectLoading,
    selectError,
} from '../../store/features/componentRegistry/selectors/index';

import type { ComponentName, TabName } from '../../types/components/index';
import React from 'react';

export default function ExampleComponent() {
    const dispatch = useAppDispatch();
    const currentTab = useAppSelector(selectCurrentTab);
    const components = useAppSelector(selectComponentsForCurrentTab);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);

    const handleTabChange = (tab: TabName) => {
        dispatch(setCurrentTab(tab));
    };

    const handleTabCofig = (tab: TabName, components: ComponentName[]) => {
        dispatch(updateTabConfig({ tab, components }));
    };

    const handleAddComponent = (component: ComponentName) => {
        dispatch(addComponentToTab({ tab: currentTab, component }));
    };

    const handleRemoveComponent = (component: ComponentName) => {
        dispatch(removeComponentFromTab({ tab: currentTab, component }));
    };

    const handleReorderComponentsOnTab = (tab: TabName, components: ComponentName[]) => {
        dispatch(reorderComponentsOnTab({ tab, components }));
    };

    const handleToggleComponentOnTab = (tab: TabName, component: ComponentName) => {
        dispatch(toggleComponentOnTab({ tab, component }));
    };

    const handleResetTabConfig = () => {
        dispatch(resetTabConfig());
    };

    const handleLoadConfig = () => {
        const sampleConfig = {
            home: ['dashboard'] as ComponentName[],
            platform: ['settings', 'profile'] as ComponentName[],
        };
        dispatch(loadTabConfigAsync(sampleConfig));
    };

    return (
        <React.Fragment>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

            <p>
                Components on current tab {currentTab} are {
                    components.map((component, idx) => (
                        <span key={idx}>{component}{idx < components.length - 1 ? ', ' : ''}</span>
                    ))
                }
            </p>

            <button onClick={() => handleTabChange('home')}>Home</button>
            <button onClick={() => handleTabChange('platform')}>platform</button>

            <button onClick={() => handleTabCofig(currentTab, ['analytics', 'profile'])}>Update Config</button>
            <button onClick={() => handleReorderComponentsOnTab(currentTab, ['profile', 'analytics'])}>Reorder tabcomp Config</button>
            <button onClick={() => handleToggleComponentOnTab(currentTab, 'profile')}>Toggle profile</button>
            <button onClick={() => handleResetTabConfig()}>Reset config</button>

            <div>
                Current Tab: {currentTab}
                Components: {components.join(', ')}
            </div>

            <button onClick={() => handleAddComponent('dashboard')}>
                Add Dashboard
            </button>
            <button onClick={() => handleRemoveComponent('dashboard')}>
                Remove Dashboard
            </button>
            <button onClick={() => handleAddComponent('analytics')}>
                Add analytics
            </button>
            <button onClick={() => handleRemoveComponent('analytics')}>
                Remove analytics
            </button>

            <button onClick={handleLoadConfig}>Load Sample Config</button>
        </React.Fragment>
    );
};