import { cn } from '../../lib/utils'

export default function Button({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors flex items-center'
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  }[variant]

  return (
    <button
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    >
      {children}
    </button>
  )
}   