import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import CoffeFrontPage from '../../assets/coffee.svg'
import { IntroContainer, CoffeesContainer } from './styles'

import { coffees } from '../../../data.json'
import { CoffeeCard } from '../../components/CoffeeCard/CoffeeCard'

export function Home() {
  return (
    <div>
      <IntroContainer>
        <div className={'descriptionContainer'}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className={'infoContainer'}>
            <span>
              <div className={'cart'}>
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </span>
            <span>
              <div className={'package'}>
                <Package size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </span>
            <span>
              <div className={'timer'}>
                <Timer size={16} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </span>
            <span>
              <div className={'coffee'}>
                <Coffee size={16} weight="fill" />
              </div>
              O café chega fresquinho até você
            </span>
          </div>
        </div>
        <img src={CoffeFrontPage} alt="" />
      </IntroContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <div className={'coffeesList'}>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </div>
      </CoffeesContainer>
    </div>
  )
}
