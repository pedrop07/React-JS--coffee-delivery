import clsx from 'clsx'
import { IMaskInput, IMaskInputProps } from 'react-imask'

interface Props {
  error?: boolean
  errorText?: string
}

export function Input({
  className,
  error,
  errorText,
  ...props
}: IMaskInputProps<HTMLInputElement> & Props) {
  return (
    <div className="flex flex-col gap-1">
      <IMaskInput
        className={clsx(
          'bg-gray-300 p-3 w-full rounded-md border border-gray-400 placeholder:text-gray-600 focus:outline-none focus:border-yellow-700',
          className,
          error && 'border-red-600',
        )}
        {...props}
      />
      {errorText && <span className="text-sm text-red-500">{errorText}</span>}
    </div>
  )
}
