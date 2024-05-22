import styled from 'styled-components'

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};

  background-color: ${(props) => props.theme['base-input']};

  input {
    color: ${(props) => props.theme['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
