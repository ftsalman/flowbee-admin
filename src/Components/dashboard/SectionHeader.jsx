import React from 'react'
import { cn } from '../../utils/utils'

export const SectionHeader = ({head="",descp="",headClassName="",descpClassName=""}) => {
  return (
     <div>
    <h5
      className={cn(
        "pl-1.5 border-l-[6px] text-xl font-semibold border-brand-primary-500 text-brand-secondary-500",
        headClassName
      )}
    >
      {head}
    </h5>
    <p
      className={cn("mt-1.5 text-sm text-brand-secondary-400", descpClassName)}
    >
      {descp}
    </p>
  </div>
  )
}
