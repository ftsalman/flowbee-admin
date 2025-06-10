import React from 'react'
import { Button } from '../../ui/button/Button'
import { IconCheveronLeft } from '../../assets/icons/InterfaceIcons'
import { useSidebar } from '../../hooks/useSidebar';

export const SidebarTogglebtn = () => {
    const { isExpanded, onCollapse } = useSidebar();
      

  return (
 <Button
      variant="brand-primary"
      className="absolute top-1/2 right-0 z-50 transform translate-x-1/2 -translate-y-1/2 size-6 p-1 rounded-full"
      onClick={() => onCollapse()}
    >
      <span
        className={`${isExpanded ? "rotate-0" : "rotate-180"} duration-300`}
      >
        <IconCheveronLeft size="20" />
      </span>
    </Button>
  )
}
