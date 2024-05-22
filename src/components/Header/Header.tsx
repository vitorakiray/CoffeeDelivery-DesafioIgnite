import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home" className={'linkToHome'}>
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <NavLink
          to="/checkout"
          title="Localização"
          className={'location textS'}
        >
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
