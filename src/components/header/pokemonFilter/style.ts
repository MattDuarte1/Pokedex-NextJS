import styled from 'styled-components';


interface PokeFilterProps {
  dropHeight?: string | number;
  dropActive?: boolean;
}

export const PokeFilter = styled.section<PokeFilterProps>`
  background-color:#252627;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media(max-width: 800px) {
    flex-direction:column;
    align-items: center;
    padding-top: 5rem;
    display: block;
    height: ${(props) => props.dropActive ? '50rem' : '0'};
    overflow: ${(props) => props.dropActive ? 'none' : 'hidden'};

    padding-bottom: 5rem;
    transition: all 200ms ease-in-out;
  }

`

export const ToggleDropDown = styled.div<PokeFilterProps>`
  position: absolute;
  top: 120px;
  width: 70px;
  left: 44%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;



  span {
    position: absolute;
    width: 40px;
    height: 4px;
    background-color: red;
    border-radius: 4px;
    transition: 0.5s;
  }

  span:nth-child(1) {
     transform: ${(props) => props.dropActive ? "translateY(0px) rotate(45deg)" : "translateY(-15px)"};
     width: ${(props) => props.dropActive ? "40px" : "25px"};;
     left: 15px;

  }

  span:nth-child(2) {
     transform: ${(props) => props.dropActive ? "translateY(0px) rotate(315deg)" : "translateY(15px)"};
     width: ${props => props.dropActive ? "40px" : "15px"};
     left: 15px;

  }

    span:nth-child(3) {
    transform: ${(props) => props.dropActive && "translateX(60px)"};
  }


  @media (max-width: 800px) {
    display: flex;
  }


`

export const Area = styled.section`
  width: 35%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 901px){
    width: 40%;
  }

  @media(max-width:800px) {
    width: 100%;
  }

  @media(max-width:1110px) {
    width: 80%;
  }

  @media(max-width:800px) {
    width: 100%;
  }

`


export const FilterSearchArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;


  @media(max-width: 800px) {
    padding-top: 10rem;

    input {
     width:5rem;
    }

    label {
      text-align: center;
    }

  }

  input {
    margin-top: 1.2rem;
    min-width: 25rem;
    height: 5rem;
    border: 3px;
    border-radius: 25px;
    text-align: center;
  }


  label {
    color: white;
    font-size: 3rem;
  }

  button {
    margin-left: 2rem;
    width: 5rem;
    height: 4rem;
    border-radius: 8px;
    background-color: red;
    border: none;
    transition: filter 300ms ease-out;


    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const InfoSearch = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #4dad5b;
  box-shadow: 0px 2px 2px 2px rgba(1,1,1,.2);
  border-radius: 7px;
  background-color: #4dad5b;
  transition: filter 300ms ease-in-out;

  @media(max-width: 800px) {
    width: 80%;
    height: 10rem;
    margin-top: 20rem;
    
  }

  @media(max-width:500px){
    transition: all 1000ms ease-in-out;
  }


  h1 {
    font-size: 1.5rem;
    color: white;

  }


  &:hover {
    filter: opacity(80%);
  }

`