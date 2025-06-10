import React from 'react'
import { cn } from '../utils/utils'

export const PageContainer = ({className="",children}) => {
  return (
     <div
      className={cn(
        " p-2 md:p-4 flex flex-col  bg-inherit ",
        className
      )}
    >
      {children}
    </div>
  )
}
