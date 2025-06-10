import React from 'react'
import { SidebarNavGroup } from './SidebarNavGroup';
import { SIDEBAR_DATA } from '../../constants/SidebarData';
import SidebarNavItem from './SidebarNavItem';

const SidebarNavList = () => {
  return (
     <>
      {SIDEBAR_DATA.map((item) => {
        const { id, path, label, icon, hasSubMenu, subMenu } = item;

        const menuProps = {
          path: path,
          label: label,
          icon: icon,
        };

        if (hasSubMenu) {
          return (
            <SidebarNavGroup
              key={id}
              onClick={(e) => onGroupClick(e, path)}
              onCloseMenu={(e) => setCurrMenu(null)}
              menuList={subMenu}
              showMenu={currMenu === path}
              {...menuProps}
            />
          );
        }

        return (
          <SidebarNavItem
            key={id}
            {...menuProps}
          />
        );
      })}
    </>
  )
}

export default SidebarNavList