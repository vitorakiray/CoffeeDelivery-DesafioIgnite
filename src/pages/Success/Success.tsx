import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  SuccessContainer,
  Order,
  SuccessHeader,
  Info,
  InfoContent,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessHeader>
        <h2>Uhu! Pedido confirmado</h2>
        <span className={'textL'}>
          Agora é só aguardar que logo o café chegará até você
        </span>
      </SuccessHeader>
      <Order>
        <Info>
          <InfoContent>
            <div>
              <MapPin size={32} className={'mapPin'} />
              <div>
                <span>
                  Entrega em
                  <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
            <div>
              <Timer size={32} className={'timer'} />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar size={32} className={'currencyDollar'} />
              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
        <img src="/images/deliveryGuy.svg" alt="Pedido concluído" />
      </Order>
    </SuccessContainer>
  )
}
