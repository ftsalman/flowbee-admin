import React from 'react'
import { cn } from '../utils/utils'

const Emptyblocks = ({icon,message="No data available",className=""}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center text-gray-500 py-12 px-4 w-full",
        className
      )}
    >
      {icon && <div className="mb-4 text-4xl">{icon}</div>}

      <p className="text-md">{message}</p>
    </div>
  )
}

export default Emptyblocks