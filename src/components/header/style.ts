import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11rem;
  gap: 25px;
  border-bottom: 1px solid black;
  background-color: white;
`

export const ContentWrapper = styled.nav`
  width: 700px;
  height: 11rem;
  display: flex;

`

interface ButtonPersonalizadoProps {
  heightBorderBottomLeft?: string | undefined;
  heightBorderBottomRight?: string;
  color?: string;
}

export const ButtonPersonalizado = styled.a<ButtonPersonalizadoProps>`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: #464646;
    align-items: center;
    height: 100%;
    box-shadow: 0.4px 0px 1px ${(props) => props.color};
    box-shadow: 0px 5px 0px rgba(1,1,1,.2);
    width: 100%;
    text-align: center;
    position: relative;
    transition: all 100ms ease-in-out;
    cursor: pointer;


    &:hover {
      text-shadow: 1px 1px 5px rgba(1,1,1,1);
      color: white;
      filter: opacity(85%);
      background: ${(props) => props.color};
    }
    
    &::before {
      content: '';
      width: 100%;
      position: absolute;
      bottom: -2px;
      border-bottom-left-radius: ${(props) => props.heightBorderBottomLeft};
      border-bottom: 5px solid ${(props) => props.color};
      border-bottom-right-radius: ${(props) => props.heightBorderBottomRight ? props.heightBorderBottomRight : 0 };
    }
  
`


