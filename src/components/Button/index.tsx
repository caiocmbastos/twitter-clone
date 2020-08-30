import styled from 'styled-components';

interface Props {
  // Para saber se o botão vai ter a aparência de ativado, ou hovered, 
  // se for true, se for false, desativado ou sem o mouse passando por cima.
  outlined?: boolean
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) =>
          props.outlined
          ? 'var(--twitter-dark-hover)' 
          : 'var(--twitter-light-hover'};
  }
`

