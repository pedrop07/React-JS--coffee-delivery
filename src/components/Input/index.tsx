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
          'bg-gray-300 dark:bg-slate-700 dark:text-slate-100 p-3 w-full rounded-md border border-gray-400 dark:border-slate-800 placeholder:text-gray-600 placeholder:dark:text-slate-200 focus:outline-none focus:border-yellow-700 focus:dark:border-yellow-700',
          className,
          error && 'border-red-600',
        )}
        {...props}
      />
      {errorText && <span className="text-sm text-red-500">{errorText}</span>}
    </div>
  )
}
