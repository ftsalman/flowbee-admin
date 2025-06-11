import React from "react";
import { cn } from "../../utils/utils";
import { Button } from "../../ui/button/Button";
import { IconBin, IconEdit } from "../../assets/icons/InterfaceIcons";

// Format date function
const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  if (isNaN(d)) return null;
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const ActionCell = ({ data = null, actions = {}, className = "" }) => {
  return (
    <div className={cn("px-4 py-2 flex justify-center gap-2", className)}>
      {actions?.edit && (
        <Button
          className="size-8 p-0.5"
          variant="tertiary"
          onClick={(e) => {
            e.stopPropagation();
            actions.edit(data);
          }}
        >
          <IconEdit />
        </Button>
      )}

      {actions?.delete && (
        <Button
          className={cn(
            "size-8 p-0.5 text-red-400 focus:shadow-red-100",
            actions?.viewClassName
          )}
          variant="tertiary"
          onClick={(e) => {
            e.stopPropagation();
            actions.delete(data);
          }}
          title="Delete"
        >
          <IconBin />
        </Button>
      )}
    </div>
  );
};


export const FormDateCell = ({ date, className = "" }) => {
  const formatted = formatDate(date);

  return (
    <div
      className={cn(
        "line-clamp-2 px-4 flex items-center justify-center text-center min-w-[200px] text-gray-800",
        className
      )}
    >
      {formatted ? formatted : <span className="text-gray-400">Not Available</span>}
    </div>
  );
};
