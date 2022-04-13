import styled from 'styled-components'


export const Content = styled.section`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: center;
  flex-direction: column;
`

export const Backarrow = styled.div`
  display: flex;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 400ms ease;

  padding-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }

`

export const Spinner = styled.div`
  width: 250px;
  margin-top: 55px;
  height: 250px;
  border: 35px solid rgba(1,1,1,.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  position: relative;
  animation: rotacao 1s linear infinite;

@keyframes rotacao {
  to { 
    transform: rotate(360deg)
  }
}
`