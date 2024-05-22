import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  .titleXs {
    margin-bottom: 0.938rem;
  }
`

export const PaymentContainer = styled.div`
  flex-grow: 1;
`

export const AdressContainer = styled.section`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  margin-bottom: 0.75rem;
  border-radius: 6px;
`

export const AdressHeader = styled.section`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentSelectorContainer = styled.section`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const PaymentHeader = styled.section`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentCartContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;
  width: 448px;
`

export const ItensOnCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  img {
    width: 64px;
    height: 64px;
  }

  .coffeeInfo {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 400;
      margin-bottom: 0.5rem;
    }

    .cartButtons {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .discartButton {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        text-transform: uppercase;

        height: 2.375rem;
        padding: 0.531rem 0.5rem;
        border-radius: 6px;

        background-color: ${(props) => props.theme['base-button']};

        svg {
          color: ${(props) => props.theme['purple-500']};
        }
      }
    }
  }
  .textM {
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentCheckout = styled.div`
  .totalItens,
  .delivery,
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .totalItens,
  .delivery {
    margin-bottom: 0.75rem;
  }

  .total {
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1.5rem;
  }

  .linkToSuccessPage {
    height: 46px;
    width: 100%;
  }

  a {
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;

    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
