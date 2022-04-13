import styled from 'styled-components'



export const PokeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: Again .5s both;

  img {
    width: 250px;
  }

@keyframes Again {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`


export const TitlePoke = styled.h1`
  width: 100%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 7px 8px 0 rgba(1,1,1,.5);
  background-color: rgba(1,1,1,.7);
  height: 60px;
  color: white;
  font-size: 50px;



  &::first-letter {
    border-bottom-left-radius: 50px;
    border-radius: 1px;
    font-size: 50px;
    text-transform: uppercase; 
    font-weight: bold;
    
  }

`

export const TitlePokeInfo = styled.h1`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 9px 10px 1px rgba(1,1,1,.9);
  background-color: rgba(1,1,1,.8);
  height: 50px;
  color: white;
  font-size: 30px;

`


export const StatusMainContainer = styled.main`
  width: 100%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-height: 250px;
  background-image: url('/images/container_bg.png');
  background-color: rgba(1,1,1,.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 8px;

`