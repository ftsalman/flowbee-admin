import React from "react";
import { SidebarNavGroupExpandedMenu } from "./SidebarNavGroupExpandedMenu";
import { useSidebar } from "../../hooks/useSidebar";
import { SidebarNavGroupCollapsedMenu } from "./SidebarNavGroupCollapsedMenu";
import SidebarNavItem from "./SidebarNavItem";

export const SidebarNavGroup = ({
  menuList = null,
  showMenu = false,
  onCloseMenu = undefined,
  ...rest
}) => {
  const { isExpanded } = useSidebar();

  return (
    <div className="relative min-w-full w-full">
      <SidebarNavItem showExpandIcon {...rest} />
      {isExpanded && showMenu ? (
        <SidebarNavGroupExpandedMenu menuList={menuList} />
      ) : (
        !isExpanded &&
        showMenu && (
          <SidebarNavGroupCollapsedMenu
            menuList={menuList}
            ref={menuRef}
            onClick={() => onCloseMenu()}
          />
        )
      )}
    </div>
  );
};
