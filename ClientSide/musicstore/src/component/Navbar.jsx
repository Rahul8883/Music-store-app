import React, { Component } from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'
export class Navbar extends Component {
    handleReg=()=>{
        this.props.history.push('/register')
    }
    handleLogin=()=>{
        this.props.history.push('/login')
    }
  render() {
    return (
      <Nav>
        <Container>
          <Menu>
            <LinkWrapper>
              <HeadLink>MusicApp</HeadLink>
            </LinkWrapper>
          </Menu>
          <Menu>
            <LinkWrapper>
              <MenuLink onClick={this.handleLogin}>Login</MenuLink>
              <Button onClick={this.handleReg}>Join Now</Button>
            </LinkWrapper>
          </Menu>
        </Container>
      </Nav>
    );
  }
}

export default withRouter (Navbar);

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-item: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 2rem;

  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.3s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background: #e7e9;
    }
  }
  @media (max-width : 670px){
      padding : .03rem
  }
`;
const HeadLink = styled.div`
  height: 1.4rem;
  cursor: pointer;
  color: #f80085b3;
  font-weight: 500;
  font-size: 1.2rem;
`;
const Menu = styled.div``;
const LinkWrapper = styled.div``;
const MenuLink = styled.a``;
const Button = styled.button`
  font-size: 0.8rem;
  background: #f774c5;
  border: none;
  color: #fff;
  transition: all 0.3s ease-in;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  border-radius: 1rem;
  padding: 0.8rem 1.1rem;
  transition: all 0.3s ease-in;
  margin-left : 0.5rem;
  cursor : pointer;
  &:hover {
    box-shadow: 0px 13px 24px -11px #ecb6d7;
    transform: translateY(-5px);
  }
`;

