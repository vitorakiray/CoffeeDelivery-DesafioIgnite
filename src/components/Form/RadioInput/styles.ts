import styled from 'styled-components'

export const RadioContainer = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  transition: all 0.2s;

  input {
    display: none;
  }
`
