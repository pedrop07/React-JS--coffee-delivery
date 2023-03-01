interface Category {
  name: string
}

export interface CoffeeData {
  id: string
  image: string
  title: string
  description: string
  price: number
  amount: number
  categorys: Category[]
}
