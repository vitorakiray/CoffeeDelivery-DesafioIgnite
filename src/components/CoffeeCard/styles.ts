import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background-color: ${({ theme }) => theme['base-card']};

  border-radius: 6px 36px;
  width: 256px;
  height: 310px;

  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;

  text-align: center;

  img {
    margin-top: -20px;
    max-width: 120px;
    max-height: 120px;
    align-self: center;
  }

  .tags {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    span {
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 800;
      padding: 4px 8px;

      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};
      border-radius: 999px;

      text-transform: uppercase;
    }
  }

  h4 {
    margin-top: 1rem;
  }

  .description {
    margin-top: 0.5rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2.063rem 0.25rem 0 0.25rem;

  .price {
    display: flex;
    align-items: center;
  }

  .control {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cartButton {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    display: flex;
  }
`
