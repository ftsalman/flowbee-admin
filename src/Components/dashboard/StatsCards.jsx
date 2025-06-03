import React from "react";
import List from "../../ui/List";
import { cn } from "../../utils/utils";
import {
  IconUsersAlt3,
} from "../../assets/icons/InterfaceIcons";

export const StatsCards = ({ data = {}, schema = null, className="",   ...props }) => {
  const STATES_DATA = [
    {
      valueKey: "OPEN",
      label: "Sales ",
      prefix: "ADE",
      icon: <IconUsersAlt3 size={24} />,
      iconClassName: "bg-[#FA5A7D] text-white w-10 h-10",
    },
    {
      valueKey: "COUNT",
      label: "Sales Count",
      icon: <IconUsersAlt3 size={24} />,
      iconClassName: "bg-[#FA5A7D] text-white w-10 h-10",
    },
    {
      valueKey: "CUST",
      label: "New Customers",
      icon: <IconUsersAlt3 size={24} />,
      iconClassName: "bg-[#FA5A7D] text-white w-10 h-10",
    },
    {
      valueKey: "RENEW",
      label: "Renewals",
      icon: <IconUsersAlt3 size={24} />,
      iconClassName: "bg-[#FA5A7D] text-white w-10 h-10",
    },
    {
      valueKey: "TRAILS",
      label: "No of Trails",
      icon: <IconUsersAlt3 size={24} />,
      iconClassName: "bg-[#FA5A7D] text-white w-10 h-10",
    },
    {
      valueKey: "PLAN",
      label: "Trail to Plan Conv",
      icon: <IconUsersAlt3 size={24} />,
      iconClassName: "bg-[#FA5A7D] text-white w-10 h-10",
    },
    
  ];

  return (
    <List
      className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}
      data={schema ?? STATES_DATA}
      render={(statItem, idx) => (
        <StatSection
          key={idx}
          {...statItem}
          value={data?.[statItem?.valueKey] ?? 0}
          {...props}
        />
      )}
    />
  );
};

export const StatSection = ({
  label = "",
  value = 0,
  icon = null,
  iconClassName = "",
  isLoading = false,
  prefix = "",
}) => {

    
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-3">
      <div className="flex flex-col  gap-3">
        <div
          className={cn(
            "flex items-center justify-center rounded-full",
            iconClassName
          )}
        >
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>

      {isLoading ? (
        <div className="w-[80px] h-[24px] rounded-md bg-gray-300 animate-pulse"></div>
      ) : (
        <h3 className="text-2xl font-bold text-slate-900">
          {prefix}{(value)}
        </h3>
      )}
    </div>
  );
};
