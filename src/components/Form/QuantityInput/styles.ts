import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  max-width: 72px;

  height: 2.375rem;
  padding: 0.531rem 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${(props) => props.theme['purple-500']};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`
