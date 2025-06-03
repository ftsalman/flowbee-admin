import React from 'react'
import { cn } from '../utils/utils'

const CardContainer = ({className="",children}) => {
  return (
     <div
      className={cn("p-4 items-center gap-3 rounded-xl bg-white", className)}
    >
      {children}
    </div>
  )
}

export default CardContainer