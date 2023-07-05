import clsx from 'clsx'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {
  const benefits = [
    {
      title: 'Compra simples e segura',
      icon: <ShoppingCart size={20} weight="fill" color="#fff" />,
      color: 'bg-yellow-500',
    },
    {
      title: 'Embalagem mantém o café intacto',
      icon: <Package size={20} weight="fill" color="#fff" />,
      color: 'bg-gray-700',
    },
    {
      title: 'Entrega rápida e rastreada',
      icon: <Timer size={20} weight="fill" color="#fff" />,
      color: 'bg-yellow-500',
    },
    {
      title: 'O café chega fresquinho até você',
      icon: <Coffee size={20} weight="fill" color="#fff" />,
      color: 'bg-purple-500',
    },
  ]

  return (
    <section className="flex lg:flex-row flex-col gap-14 mt-24">
      <div className="lg:order-first order-last">
        <h1 className="font-cursive font-extrabold text-5xl mb-4">
          Encontre o café perfeito para qualquer hora do dia
        </h1>

        <p className="text-xl text-gray-900">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="grid gap-x-6 gap-y-5 grid-cols-2 mt-16">
          {benefits.map(({ title, icon, color }) => (
            <div key={title} className="flex items-center gap-3">
              <div
                className={clsx(
                  'flex items-center justify-center rounded-full p-2',
                  color,
                )}
              >
                {icon}
              </div>
              <span className="text-gray-700">{title}</span>
            </div>
          ))}
        </div>
      </div>

      <img
        className="mx-auto"
        src="src/assets/images/branding-coffee.svg"
        alt="Coffee Delivery"
      />
    </section>
  )
}
