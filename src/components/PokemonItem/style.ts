import styled, { css } from 'styled-components'


interface pokeProps {
  pokeUrl?: string,
  backgroundColor?: string;
}

export const PokeContainer = styled.div<pokeProps>`
border: none;
box-shadow: 2px 3px 20px rgba(13, 19, 23, .5);
border-radius: 22px;
width: 400px;
height: 200px;
background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
background-image: url(${props => props.pokeUrl});
background-repeat: no-repeat;
background-position: right;
background-size: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
cursor: pointer;
transition: all 0.3s ease-in-out;


img {
  margin-top: 5px;
  margin-left: 50px;
  background-color: rgba(1,1,1, 0.3);
  box-shadow: 5px 15px 30px 2px rgba(1,1,1, .3) ;
  border-radius: 100%;
  width: 100px;
}


&:hover {
  transform: scale(1.05);

}



@media (max-width: 400px) {
  max-width: 350px;
}


`

export const Title = styled.h1`
  display: flex;
  margin-top: 5px;
  margin-left: 40px;
  justify-content: center;
  font-size: 30px;
  color: white;

`

export const Description = styled.span`
margin-left: 23px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
gap: 20px;
width: 150px;
color: blue;
`



export const PokeLoadingContainer = styled.div<pokeProps>`
border: none;
box-shadow: 2px 3px 20px rgba(13, 19, 23, .5);
border-radius: 22px;
width: 400px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.3s ease-in-out;
`

export const Spinner = styled.div`
width: 60px;
height: 60px;
border: 8px solid rgba(0,0,0,.1);
border-left-color: #22a6b3;
border-radius: 50%;
animation: rotacao 1s linear infinite;

@keyframes rotacao {
  to { 
    transform: rotate(360deg)
  }
}
`