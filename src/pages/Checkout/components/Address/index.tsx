import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'

export function Address() {
  return (
    <div className="bg-gray-100 rounded-md p-6 lg:p-10">
      <div className="mb-8 flex items-center gap-2">
        <MapPinLine className="hidden sm:block" size={30} color="#DBAC2C" />

        <div>
          <span className="text-gray-800">Endereço de Entrega</span>
          <p className="text-gray-700 text-sm">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-3 gap-3">
          <Input type="text" placeholder="CEP" />
        </div>
        <div className="w-auto">
          <Input type="text" placeholder="Rua" />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Input type="text" placeholder="Número" />
          <Input
            className="sm:col-span-2"
            type="text"
            placeholder="Complemento"
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </div>
      </div>
    </div>
  )
}
