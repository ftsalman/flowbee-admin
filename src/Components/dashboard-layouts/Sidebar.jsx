import React from 'react'
import { Button } from '../../ui/button/Button'
import { cn } from '../../utils/utils'
import { IconHamburger } from '../../assets/icons/InterfaceIcons'
import { NavLink } from 'react-router-dom'
import List from '../../ui/List'
import { SIDEBAR_DATA } from '../../constants/SidebarData'
import { buttonVariants } from '../../ui/button/buttonVariants '

const Sidebar = ({
    isOpen,
    onToggle,
}) => {
  return (
    <aside
      className={cn(
        "text-black h-screen flex flex-col justify-between px-4 py-6 bg-white  transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "w-[253px]" : "w-[80px]"
      )}
    >
      {/* Top Section: Toggle + Logo */}
      <div className=" flex flex-col flex-grow">
        <div className="flex items-center j gap-2">
          {/* <Button
            variant="tertiary"
            className="p-0 size-11 flex-shrink-0 rounded-md cursor-pointer transition-transform duration-300"
            title="Menu"
            onClick={onToggle}
          >
            <IconHamburger
              size="20"
              className={cn(
                isOpen ? "rotate-90" : "rotate-0",
                "transition-transform"
              )}
            />
          </Button> */}

          {/* Logo + Program Label - Only show when open */}
          <div className="overflow-hidden mb-4 px-4 transition-all duration-300 ease-in-out">
            <img
              src="/public/svg/brand-logo/logo-flowbe-secondary.svg"
              alt="logo"
              width="125"
              className={cn(
                "transition-all duration-300 ease-in-out",
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}
            />
           
          </div>
        </div>

        {/* Sidebar Items */}
        <div className="p-3 flex flex-col gap-2 items-center flex-grow">
            
          <List
            className="flex flex-col w-full"
            data={SIDEBAR_DATA}
            render={(item) => (
              <NavLink
                to={item?.path}
                title={item?.tooltip}
                 end={item?.path === "/dashboard"}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({
                      variant: isActive ? "brand-primary" : "tertiary",
                      className: cn(
                        "relative justify-start py-2  w-full gap-2.5 rounded-md whitespace-nowrap transition-all duration-300",
                        isOpen
                          ? "pl-3 pr-3"
                          : "pl-2 pr-2 w-10 justify-center"
                      ),
                    }),
                    !isActive
                      ? "hover:bg-brand-Primary-100/10 duration-300"
                      : "",
                    "rounded-lg h-10 text-start"
                  )
                }
              >
                {item?.icon && <span className="text-lg">{item.icon}</span>}
                {isOpen && <span>{item?.label}</span>}
              </NavLink>
            )}
          />
        </div>
      </div>

      {/* Support Button */}
      {/* <div className="mt-auto">
        <Button className="w-full flex items-center rounded-md gap-2 px-4 py-2 bg-white text-black cursor-pointer border border-[#FFCB06]">
          <IconSupport size="24" />
          {isOpen && "Support Center"}
        </Button>
      </div> */}
    </aside>
  )
}

export default Sidebar