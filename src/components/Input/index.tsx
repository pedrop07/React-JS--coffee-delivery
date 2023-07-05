import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'bg-gray-300 p-3 w-full rounded-md border border-gray-400 placeholder:text-gray-600 focus:outline-none focus:border-yellow-700',
        className,
      )}
      {...props}
    />
  )
}
