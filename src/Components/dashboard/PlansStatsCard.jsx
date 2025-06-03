import React from "react";
import { cn } from "../../utils/utils";

export const PlansStatsCard = ({ icon, title = "", count = "",IconClassName }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-28 min-w-[200px]">
      {/* Top Section: Icon + Title */}
      <div className="flex items-center gap-2">
        <div className={cn("bg-blue-50 p-2 rounded-full text-blue-600 text-sm", IconClassName)}>
          {icon}
        </div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
      </div>

      {/* Bottom Right: Count */}
      <div className="flex justify-end items-end flex-1">
        <p className="text-xl font-bold text-black">{count}</p>
      </div>
    </div>
  );
};
