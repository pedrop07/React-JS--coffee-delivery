import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'
import { Controller, useFormContext } from 'react-hook-form'

export function Address() {
  const { formState } = useFormContext()
  const { errors } = formState

  return (
    <div className="bg-gray-100 dark:bg-slate-800 rounded-md p-6 lg:p-10">
      <div className="mb-8 flex items-center gap-2">
        <MapPinLine className="hidden sm:block" size={30} color="#DBAC2C" />

        <div>
          <span className="text-gray-800 dark:text-slate-100">
            Endereço de Entrega
          </span>
          <p className="text-gray-700 dark:text-slate-200 text-sm">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-3 gap-3">
          <Controller
            name="cep"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="CEP"
                mask="00000-000"
                error={!!errors.cep?.message}
                errorText={errors.cep?.message as string}
                {...field}
              />
            )}
          />
        </div>
        <div className="w-auto">
          <Controller
            name="street"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Rua"
                error={!!errors.street?.message}
                errorText={errors.street?.message as string}
                {...field}
              />
            )}
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Controller
            name="number"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Número"
                error={!!errors.number?.message}
                errorText={errors.number?.message as string}
                {...field}
              />
            )}
          />
          <Controller
            name="additional"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Complemento"
                className="sm:col-span-2"
                error={!!errors.additional?.message}
                errorText={errors.additional?.message as string}
                {...field}
              />
            )}
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Controller
            name="neighborhood"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Bairro"
                error={!!errors.neighborhood?.message}
                errorText={errors.neighborhood?.message as string}
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Cidade"
                error={!!errors.city?.message}
                errorText={errors.city?.message as string}
                {...field}
              />
            )}
          />
          <Controller
            name="state"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="UF"
                error={!!errors.state?.message}
                errorText={errors.state?.message as string}
                {...field}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}
