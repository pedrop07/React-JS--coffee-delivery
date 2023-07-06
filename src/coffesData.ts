import expressoTradicional from './assets/coffees/expresso-tradicional.png'
import expressoAmericano from './assets/coffees/expresso-americano.png'
import expressoCremoso from './assets/coffees/expresso-cremoso.png'
import expressoGelado from './assets/coffees/expresso-gelado.png'
import cafeComLeite from './assets/coffees/cafe-com-leite.png'
import latte from './assets/coffees/latte.png'
import capuccino from './assets/coffees/capuccino.png'
import macchiato from './assets/coffees/macchiato.png'
import mochaccino from './assets/coffees/mochaccino.png'
import chocolateQuente from './assets/coffees/chocolate-quente.png'
import cubano from './assets/coffees/cubano.png'
import havaiano from './assets/coffees/havaiano.png'
import arabe from './assets/coffees/arabe.png'
import irlandes from './assets/coffees/irlandes.png'

export const coffeesData = [
  {
    id: '1',
    image: expressoTradicional,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    amount: 5,
    categorys: [{ name: 'Tradicional' }],
  },
  {
    id: '2',
    image: expressoAmericano,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    amount: 6,
    categorys: [{ name: 'Tradicional' }],
  },
  {
    id: '3',
    image: expressoCremoso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    amount: 2,
    categorys: [{ name: 'Tradicional' }],
  },
  {
    id: '4',
    image: expressoGelado,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    amount: 7,
    categorys: [{ name: 'Tradicional' }, { name: 'Gelado' }],
  },
  {
    id: '5',
    image: cafeComLeite,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    amount: 3,
    categorys: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: '6',
    image: latte,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    amount: 1,
    categorys: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: '7',
    image: capuccino,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    amount: 4,
    categorys: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: '8',
    image: macchiato,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    amount: 5,
    categorys: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: '9',
    image: mochaccino,
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    amount: 3,
    categorys: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: '10',
    image: chocolateQuente,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    amount: 8,
    categorys: [{ name: 'Especial' }, { name: 'Com leite' }],
  },
  {
    id: '11',
    image: cubano,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    amount: 10,
    categorys: [
      { name: 'Especial' },
      { name: 'Alcoólico' },
      { name: 'Gelado' },
    ],
  },
  {
    id: '12',
    image: havaiano,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    amount: 4,
    categorys: [{ name: 'Especial' }],
  },
  {
    id: '13',
    image: arabe,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    amount: 3,
    categorys: [{ name: 'Especial' }],
  },
  {
    id: '14',
    image: irlandes,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    amount: 2,
    categorys: [{ name: 'Especial' }, { name: 'Alcoólico' }],
  },
]
