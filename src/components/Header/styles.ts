import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .linkToHome {
    height: 40px;
    width: 85px;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      padding: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};
      border-radius: 6px;
      text-decoration: none;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .location {
      background: ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['purple-700']};
      gap: 0.25rem;
    }
  }
`
