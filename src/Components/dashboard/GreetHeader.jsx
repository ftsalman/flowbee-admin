import React from "react";
import { cn } from "../../utils/utils";

export const GreetHeader = ({
  isLoadding = true,
  userNameClassName = "",
  userName = "User",
  descClassName,
  descp = "",
}) => {
  if (isLoadding) {
    return (
      <div className="space-y-0.5">
        <div className="w-[74px] h-6 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="w-[238px] h-7 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      <h4 className={cn("flex items-center gap-2 text-base md:text-[20px] font-bold", userNameClassName)}>
        🥷 {getGreeting()},
        <span className="ml-0.5">{userName}</span>
      </h4>
      <h4 className={cn("text-lg font-semibold text-black", descClassName)}>
        {descp}
      </h4>
    </div>
  );
};

const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return ("Good Morning");
  } else if (currentHour < 18) {
    return ("Good Afternoon");
  } else {
    return ("Good Evening");
  }
};
