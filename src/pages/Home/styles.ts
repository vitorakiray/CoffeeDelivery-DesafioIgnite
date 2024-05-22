import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  height: 34rem;

  .descriptionContainer {
    p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};

      margin-bottom: 66px;
    }

    .infoContainer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1.25rem;
      column-gap: 2.5rem;

      .coffee,
      .package,
      .timer,
      .cart {
        border-radius: 999px;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;
        max-width: 32px;

        color: ${(props) => props.theme.background};
      }

      .coffee {
        background: ${(props) => props.theme['purple-500']};
      }
      .package {
        background: ${(props) => props.theme['base-text']};
      }
      .timer {
        background: ${(props) => props.theme['yellow-500']};
      }
      .cart {
        background: ${(props) => props.theme['yellow-700']};
      }

      span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};

        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
    }
  }
`

export const CoffeesContainer = styled.section`
  margin: 2rem 0;
  .coffeesList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
