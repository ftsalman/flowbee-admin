import React from "react";
import { cn } from "../utils/utils";

export const TableContainer = ({
  className,
  tblCtnrClassName = "",
  children,
}) => {
  return (
    <>
      <div className={cn("w-full flex flex-col", className)}>
        <div
          className={cn(
            "max-h-[calc(100vh-13.1rem)] overflow-auto w-full",
            tblCtnrClassName
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export const Table = ({ children, className = "", ...rest }) => (
  <table
    className={cn(
      "divide-y divide-gray-100 table-auto main-table w-full overflow-y-auto overflow-x-auto",
      className
    )}
    {...rest}
  >
    {children}
  </table>
);

const Thead = ({ className = "", children, id, ...rest }) => (
  <thead
    id={id}
    className={cn("sticky top-0 z-20  bg-[#D9D9FF]", className)}
    {...rest}
  >
    {children}
  </thead>
);

Table.Thead = Thead;

const Tr = ({ className = "", children, ...rest }) => (
  <tr className={cn("", className)} {...rest}>
    {children}
  </tr>
);

Table.Tr = Tr;

const Th = ({
  className = "",
  contentClassName = "",
  children,
  isFixed = false,
  onSort = () => {},
  showSortIcon = true,
  sortClassName = "",
  sortDirection = "default",
  ...rest
}) => {
  const defaultStyles =
    "px-4 py-2 h-12 min-w-[10rem] bg-[#D9D9FF] text-[#344054] text-left text-sm group no-select hover:bg-[#c6c6f7] transition-all duration-300 font-medium whitespace-nowrap";
  const sortStyles = showSortIcon ? "cursor-pointer" : "cursor-default";
  const fixedStyles = isFixed ? "sticky left-0 z-30 bg-[#D9D9FF]" : "";
  const allClassName = cn(defaultStyles, sortStyles, fixedStyles, className);

  return (
    <th className={allClassName} {...rest} onClick={onSort}>
      <div
        className={cn(
          "flex items-center justify-between gap-4 ",
          contentClassName
        )}
      >
        {children}
        {showSortIcon && (
          <span
            className={cn(
              "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
              sortClassName
            )}
          >
            {SORT_ICONS[sortDirection]}
          </span>
        )}
      </div>
    </th>
  );
};

Table.Th = Th;

const Tbody = ({ className = "", children, ...rest }) => (
  <tbody
    className={cn(
      "text-xs bg-primary divide-y divide-gray-50 text-[#475467]",
      className
    )}
    {...rest}
  >
    {children}
  </tbody>
);

Table.Tbody = Tbody;

const Td = ({ className = "", children, ...rest }) => {
  const defaultClassess = "px-4 py-2 h-12 bg-inherit";
  return (
    <td className={cn(className, defaultClassess)} {...rest}>
      {children}
    </td>
  );
};

Table.Td = Td;
