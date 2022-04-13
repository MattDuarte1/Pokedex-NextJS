import styled from 'styled-components'

type ContainerProps = {
  backgroundColor?: string;
}

export const Container = styled.button<ContainerProps>`
  border-radius: 5px;
  color: white;
  min-width: 50px;
  height: 25px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent" };
  border: 1px solid rgba(1,1,1,.2);
  box-shadow: 1px 4px 5px 2px rgba(1,1,1,.4);
`