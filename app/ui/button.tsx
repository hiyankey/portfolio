import { cva, VariantProps } from 'class-variance-authority'

const buttonClasses = cva(
  'rounded-[12px] text-white inline-block w-fit h-fit text-md',
  {
    variants: {
      variant: {
        primary: 'bg-primary shadow-primary shadow-black/[.05]',
        secondary: '',
      },
      size: {
        default: 'px-[8px] py-[8px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)
interface Props extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode
}

export function Button({ children, variant, size }: Props) {
  return (
    <button className={`${buttonClasses({ variant, size })}`}>
      {children}
    </button>
  )
}
