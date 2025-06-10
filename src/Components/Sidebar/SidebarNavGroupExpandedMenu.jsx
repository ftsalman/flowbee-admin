import React from 'react'
import List from '../../ui/List'
import SidebarNavItem from './SidebarNavItem'

export const SidebarNavGroupExpandedMenu = ({ menuList = []}) => {
  return (
    <List
    data={menuList}
    render={(item) => <SidebarNavItem {...item} />}
    className="mt-2 px-2.5 flex flex-col gap-0 border-l-[4px] rounded-r-lg border-brand-primary-400"
  />
  )
}
