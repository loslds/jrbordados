import styled from 'styled-components'

export const Container = styled.nav`
  background: black; /*linear-gradient(150deg, #53f, 15%, #05d5ff);*/
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 11px;
  }
`

export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 10px 15px;
    outline: 0;
    color: #000000;
    font-size: 18px;
    transition: 0.25s;

    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }

  .dropdown-root {
    z-index: 100;
    position: absolute;
  }

  .dropdown-arrow {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background-color: #f1f0ea;
      top: -6.5px;
      left: -8px;
      border-radius: 4px 0 0 0;
      transform: rotate(45deg);
    }
  }

  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: 0px 30px 100px -20px rgba(172, 172, 175, 0.25),
      0px 20px 60px -30px rgba(172, 172, 175, 0.3),
      0px -10px 60px -10px rgba(172, 172, 175, 0.5);
    background-color: #f1f0ea;
    border-radius: 4px;
  }

  .dropdown-section {
    position: absolute;
  }

  .dropdown-background {
    position: absolute;
    bottom: 0;
    background-color: #80b0e2;
    width: 100%;
  }
`
