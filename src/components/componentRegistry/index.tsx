import { useAppDispatch, useAppSelector } from '../../hooks/redux/index';
import {
    setCurrentPage,
    addComponentToPage,
    loadPageConfigAsync,
    removeComponentFromPage,
    updatePageConfig,
    reorderComponentsOnPage,
    toggleComponentOnPage,
    resetPageConfig,
} from '../../store/features/componentRegistry/pageSlice';
import {
    selectCurrentPage,
    selectComponentsForCurrentPage,
    selectLoading,
    selectError,
} from '../../store/features/componentRegistry/selectors/index';

import type { ComponentName, PageName } from '../../types/components/index';

export default function ExampleComponent() {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(selectCurrentPage);
    const components = useAppSelector(selectComponentsForCurrentPage);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);

    const handlePageChange = (page: PageName) => {
        dispatch(setCurrentPage(page));
    };

    const handlePageCofig = (page: PageName, components: ComponentName[]) => {
        dispatch(updatePageConfig({ page, components }));
    };

    const handleAddComponent = (component: ComponentName) => {
        dispatch(addComponentToPage({ page: currentPage, component }));
    };

    const handleRemoveComponent = (component: ComponentName) => {
        dispatch(removeComponentFromPage({ page: currentPage, component }));
    };

    const handleReorderComponentsOnPage = (page: PageName, components: ComponentName[]) => {
        dispatch(reorderComponentsOnPage({ page, components }));
    };

    const handleToggleComponentOnPage = (page: PageName, component: ComponentName) => {
        dispatch(toggleComponentOnPage({ page, component }));
    };

    const handleResetPageConfig = () => {
        dispatch(resetPageConfig());
    };

    const handleLoadConfig = () => {
        const sampleConfig = {
            home: ['dashboard'] as ComponentName[],
            workspace: ['settings', 'profile'] as ComponentName[],
        };
        dispatch(loadPageConfigAsync(sampleConfig));
    };

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

            <button onClick={() => handlePageChange('home')}>Home</button>
            <button onClick={() => handlePageChange('workspace')}>Workspace</button>

            <button onClick={() => handlePageCofig(currentPage, ['analytics', 'profile'])}>Update Config</button>
            <button onClick={() => handleReorderComponentsOnPage(currentPage, ['profile', 'analytics'])}>Reorder pagecomp Config</button>
            <button onClick={() => handleToggleComponentOnPage(currentPage, 'profile')}>Toggle profile</button>
            <button onClick={() => handleResetPageConfig()}>Reset config</button>

            <div>
                Current Page: {currentPage}
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
        </div>
    );
};