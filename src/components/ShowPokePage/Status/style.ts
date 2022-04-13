import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;

`

export const Title = styled.h1`
  font-family: sans-serif;
  width: 50%;
  color: white;
  font-size: 20px;
  font-weight: 500;

  &::first-letter{
    color: red;
    font-weight: 800;
    text-transform: uppercase;
    box-shadow: 0px 1px 0px 0px red;
  }
`

export const Box = styled.div`
  min-width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: rgba(250,0,1,.8);
  border: none;
  transition: all 500ms ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

   h1 {
    color: white;
    font-weight: bold;
    font-size: large;

  }
`