import { useSidebar } from "../../hooks/useSidebar";
import { cn } from "../../utils/utils";

export const SidebarWrapper = ({ children = null }) => {
  const { isOpen, isExpanded, onCollapse, onToggle } = useSidebar();

  const sidebarWidth = isExpanded ? "w-[12.5rem]" : "w-[3.70rem]";

  return (
    <div
      className={`relative ${sidebarWidth} flex-shrink-0  border-gray-200 bg-white duration-300`}
    >
      {children}
    </div>
  );
};

export const SidebarContentWrapper = ({ children, className = "" }) => (
  <div className={cn("p-2 flex flex-col gap-2", className)}>{children}</div>
);

export const SidebarBodyWrapper = ({ children, hasScrollable = true }) => {
  const scrollbarClass = hasScrollable
    ? "panel-scrollbar overflow-y-auto overflow-x-hidden"
    : "";

  return (
    <div
      className={`flex flex-col gap-3 h-full duration-300 ${scrollbarClass}`}
    >
      {children}
    </div>
  );
};
