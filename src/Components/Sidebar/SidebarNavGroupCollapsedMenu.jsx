import React from "react";
import { Menu } from "../../ui/Menu";
import { SidebarNavGroupMenuItem } from "./SidebarNavGroupMenuItem";

export const SidebarNavGroupCollapsedMenu = ({
  menuList = [],
  ref = null,
  ...rest
}) => {
  return (
    <Menu
      ref={ref}
      className={`absolute z-50  max-w-[190px] flex flex-col gap-1`}
    >
      {menuList?.map(({ path, label, id }) => (
        <SidebarNavGroupMenuItem key={id} label={label} path={path} {...rest} />
      ))}
    </Menu>
  );
};
