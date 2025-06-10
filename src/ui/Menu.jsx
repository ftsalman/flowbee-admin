import React from "react";
import { cn } from "../utils/utils";

export const Menu = ({children, className, onClose, ref }) => {
  const internalRef = useClickOutside(onClose);

  useImperativeHandle(ref, () => internalRef.current);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={internalRef}
      className={cn(
        "min-w-[150px] p-1.5 flex flex-col rounded-lg border-2 border-gray-100 shadow-xl shadow-black/10 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};



const MenuItem = ({
  children,
  icon,
  iconClassName = "",
  label,
  className,
  onClick,
  ...rest
}) => {
  return (
    <>
      <button
        {...rest}
        onClick={onClick}
        className={cn(
          "p-2 flex items-center gap-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 duration-300",
          className
        )}
      >
        {children ? (
          children
        ) : (
          <>
            <span className={cn("flex-shrink-0", iconClassName)}>{icon}</span>
            {label}
          </>
        )}
      </button>
    </>
  );
};
