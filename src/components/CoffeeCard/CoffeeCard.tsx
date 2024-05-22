import { QuantityInput } from '../Form/QuantityInput/QuantityInput'
import { CoffeeContainer, PriceContainer } from './styles'

import { ShoppingCartSimple } from '@phosphor-icons/react'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: Props) {
  return (
    <CoffeeContainer>
      <img src={coffee.image} alt={coffee.title} />
      <div className={'tags'}>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h4>{coffee.title}</h4>
      <span className={'description textS'}>{coffee.description}</span>
      <PriceContainer>
        <div className={'price'}>
          <span>R$</span>
          <h3>{coffee.price.toFixed(2)}</h3>
        </div>
        <div className={'control'}>
          <QuantityInput />
          <button className={'cartButton'}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </PriceContainer>
    </CoffeeContainer>
  )
}
