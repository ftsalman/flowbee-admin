import React, { Fragment } from "react";
import { cn } from "../utils/utils";

const List = ({
  uniqueKey = "",
  className = "",
  render = () => {},
  data = [],
}) => {
  return (
    <>
      <div className={cn("w-full   grid grid-cols-6 gap-4", className)}>
        {data?.map((item, index) => (
          <Fragment key={uniqueKey ? item[uniqueKey] : index}>
            {render?.(item, index)}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default List;
