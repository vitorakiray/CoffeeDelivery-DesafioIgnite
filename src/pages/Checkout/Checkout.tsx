import { CurrencyDollar, MapPinLine, Trash } from '@phosphor-icons/react'
import { TextInput } from '../../components/Form/TextInput/TextInput'
import { RadioInput } from '../../components/Form/RadioInput/RadioInput'
import { QuantityInput } from '../../components/Form/QuantityInput/QuantityInput'
import {
  AdressHeader,
  CheckoutContainer,
  PaymentCartContainer,
  PaymentContainer,
  AdressContainer,
  PaymentHeader,
  PaymentSelectorContainer,
  ItensOnCartContainer,
  PaymentCheckout,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <p className={'titleXs'}>Complete seu pedido</p>

        <PaymentContainer>
          <AdressContainer>
            <AdressHeader>
              <MapPinLine size={22} />
              <div>
                <p className={'textM'}>Endereço de Entrega</p>
                <span className={'textS'}>
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </AdressHeader>
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </AdressContainer>
          <PaymentSelectorContainer>
            <PaymentHeader>
              <CurrencyDollar size={22} />
              <div>
                <p className={'textM'}>Pagamento</p>
                <span className={'textS'}>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </PaymentHeader>
            <div>
              <RadioInput />
              <RadioInput />
              <RadioInput />
            </div>
          </PaymentSelectorContainer>
        </PaymentContainer>
      </div>

      <div>
        <p className={'titleXs'}>Cafés selecionados</p>
        <PaymentCartContainer>
          <ItensOnCartContainer>
            <div className={'coffeeInfo'}>
              <img src="/images/coffees/cafe-gelado.png" alt="" />
              <div>
                <p className={'textM'}>Café Gelado</p>
                <div className={'cartButtons'}>
                  <QuantityInput />
                  <button className={'discartButton'}>
                    <Trash size={16} />
                    <span className={'buttonS'}>Remover</span>
                  </button>
                </div>
              </div>
            </div>
            <span className={'textM'}>R$ 9,90</span>
          </ItensOnCartContainer>

          <PaymentCheckout>
            <div className={'totalItens'}>
              <span className={'textS'}>Total de itens</span>
              <span className={'textS'}>R$ 9,90</span>
            </div>
            <div className={'delivery'}>
              <span className={'textS'}>Entrega</span>
              <span className={'textS'}>R$ 5,00</span>
            </div>
            <div className={'total'}>
              <span className={'textL'}>Total</span>
              <span className={'textL'}>R$ 14,90</span>
            </div>
            <NavLink
              to="/success"
              title="Success"
              className={'linkToSuccessPage buttonG'}
            >
              Confirmar Pedido
            </NavLink>
          </PaymentCheckout>
        </PaymentCartContainer>
      </div>
    </CheckoutContainer>
  )
}
