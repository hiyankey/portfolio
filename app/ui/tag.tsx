import { cva, VariantProps } from 'class-variance-authority'

const tagClasses = cva('text-black/[.6] text-sm inline-block w-fit h-fit', {
  variants: {
    variant: {
      primary: '',
      secondary: 'bg-white shadow-secondary shadow-black/[.05]',
    },
    size: {
      default: 'px-[6px] py-[3px]',
    },
    rounded: {
      full: 'rounded-full',
      md: 'rounded-[8px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    rounded: 'full',
  },
})
interface Props extends VariantProps<typeof tagClasses> {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, variant, size, rounded, className }: Props) {
  return (
    <div className={`${tagClasses({ variant, size, rounded })} ${className}`}>
      {children}
    </div>
  )
}
