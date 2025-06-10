import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from './useWindowSize';
import { SCREEN_SIZES } from '../utils/utils';
import { toggleSiderbar, toggleSiderbarCollapsed } from './sidebarReducer';

export const useSidebar = () => {
  const sidebarStates = useSelector((state) => state.sidebar);
  const dispatch = useDispatch(); // ✅ You forgot to call useDispatch

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= SCREEN_SIZES.md) {
      dispatch(toggleSiderbar(true));
    }
  }, [dispatch, windowSize.width]);

  return {
    onCollapse: () => dispatch(toggleSiderbarCollapsed()),
    onToggle: () => dispatch(toggleSiderbar()),
    isExpanded: !sidebarStates?.isSiderbarCollapsed, // usually "expanded" is when it's not collapsed
    isOpen: sidebarStates?.isSiderbarOpen,
  };
};
