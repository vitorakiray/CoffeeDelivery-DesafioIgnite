import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin: 0 auto;
  padding-top: 5rem;
`

export const SuccessHeader = styled.div`
  h2 {
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Order = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 6.375rem;
`

export const Info = styled.div`
  margin-top: 2.5rem;
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme['yellow-500']}, ${props.theme['purple-500']})`};
`

export const InfoContent = styled.div`
  width: 526px;
  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .currencyDollar,
  .timer,
  .mapPin {
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 999px;
  }

  .mapPin {
    background: ${(props) => props.theme['purple-500']};
  }

  .timer {
    background: ${(props) => props.theme['yellow-500']};
  }

  .currencyDollar {
    background: ${(props) => props.theme['yellow-700']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`
