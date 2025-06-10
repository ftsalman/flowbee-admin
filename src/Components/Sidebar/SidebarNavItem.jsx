import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconCheverontDown } from '../../assets/icons/InterfaceIcons'
import { cn } from '../../utils/utils'
import { useSidebar } from '../../hooks/useSidebar'
import { buttonVariants } from '../../ui/button/buttonVariants '

const SidebarNavItem = ({
  onClick = undefined,
  label = null,
  icon = null,
  path = null,
  showExpandIcon = false,
  showBadge = false,
  ...rest
}) => {

     const { isExpanded } = useSidebar();

  const getClassess = ({ isActive }) => {
    let classess =
      "h-10 px-2 min-w-10 flex-shrink-0 flex items-center justify-start gap-2 duration-300 border-0";

    classess += isExpanded ? "w-full" : "w-10";

    return cn(
      buttonVariants({
        variant: isActive ? "brand-primary" : "tertiary",
        className:
          "relative text-xs hover:bg-brand-primary-100 duration-300 border-0",
      }),
      classess
    );
  };
  return (
     <NavLink to={path} onClick={onClick} className={getClassess} {...rest}>
    

      {/* Icon */}
      {icon && <div className="min-w-6 flex justify-center">{icon}</div>}

      {/* Label and dropdown */}
      <div
        className={cn(
          isExpanded ? "w-full" : "w-0 sr-only",
          "flex items-center justify-between gap-2"
        )}
      >
        <span className="line-clamp-1 break-all">{label}</span>
        {showExpandIcon && <IconCheverontDown />}
      
      </div>
    </NavLink>
  )
}

export default SidebarNavItem