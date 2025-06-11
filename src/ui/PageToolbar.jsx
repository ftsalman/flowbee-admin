import React from "react";
import { cn } from "../utils/utils";
import { PageSearchBar } from "./PageSearchbar";
import { Button } from "./button/Button";
import { IconSort } from "../assets/icons/InterfaceIcons";

export const PageToolbar = ({
  pageHead = "Page Title",
  className = "",
  children,
  handleFiltermodalOpen,
  isFilterActive,
  count = 0,
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 rounded-xl overflow-x-auto rounded-b-none z-40 w-full p-4 flex flex-col items-start md:flex-row md:items-center gap-4 bg-white",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <h6 className="flex-shrink-0 text-lg font-medium w-max whitespace-nowrap text-[#05004E]">
          {pageHead}
        </h6>
        <span className="text-gray-600 text-lg">{count}</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-end gap-4 flex-grow w-full">
        <div className="w-full sm:w-max flex xl:justify-end sm:justify-end md:justify-end gap-4">
          <div>
            <PageSearchBar />
          </div>

          <div className="relative h-full hidden md:flex">
            <Button
              size="sm"
              variant="secondary"
              className=" bg-black text-white shadow-sm relative  h-10"
              onClick={handleFiltermodalOpen}
            >
              <div className="flex items-center gap-2">
                <IconSort size={20} />
                <span className="text-primary-900 font-medium text-sm">
                  Filter
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
