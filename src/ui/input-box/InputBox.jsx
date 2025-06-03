import React from 'react'
import { InputBoxVariants } from './InputBoxVariants'
import { cn } from '../../utils/utils'

export const InputBox = ({
     className = "",
  size = "md",
  variant = "secondary",
  ...props
}) => {
  return (
   <input
    type="text"
    className={cn(InputBoxVariants({ className, size, variant }))}
    {...props}
  />
  )
}
