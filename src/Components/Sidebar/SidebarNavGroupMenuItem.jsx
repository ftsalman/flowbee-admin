import React from "react";
import { useSidebar } from "../../hooks/useSidebar";
import { NavLink } from "react-router-dom";
import { buttonVariants } from "../../ui/button/buttonVariants ";

export const SidebarNavGroupMenuItem = ({
  label = null,
  path = null,
  ...rest
}) => {
  const { isExpanded } = useSidebar();

  const getClassess = ({ isActive }) => {
    let classess =
      "h-8 px-1.5 min-w-10 flex-shrink-0 flex items-center justify-start gap-1 duration-300 border-0";

    classess += isExpanded ? "w-full" : "w-10";

    return cn(
      buttonVariants({
        size: "xs",
        variant: isActive ? "brand-primary-gradient" : "tertiary",
        className: "text-xs hover:bg-brand-primary-100 duration-300 border-0",
      }),
      classess
    );
  };

  return (
     <NavLink to={path} className={getClassess} {...rest}>
      <div className="line-clamp-1 whitespace-nowrap duration-300">{label}</div>
    </NavLink>
  );
};
