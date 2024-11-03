export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={`${className} max-w-[60rem] mx-auto`}>{children}</div>
}
