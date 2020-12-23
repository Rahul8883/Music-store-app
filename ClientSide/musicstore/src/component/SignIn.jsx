import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TextField } from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";
import Navbar from "../component/Navbar";
export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleField = (event, value) => {
    this.setState({ [value]: event.target.value });
  };
  handleSubmit = () => {
    let loginValue = {
      email: this.state.email,
      password: this.state.password,
    };
    localStorage.setItem('email', loginValue.email);
    axios
      .post("http://localhost:8080/login", loginValue)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/musicList");
      })
      .catch((err) => {
        console.log(err);
      });
   
  };
  render() {
    return (
      <Container>
     <Navbar/>
        <Card>
          <Menu>
            <LinkWrapper>
              <HeadLink>Login</HeadLink>
            </LinkWrapper>
          </Menu>
          <Menu>
            <LinkWrapper>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter Your Email..."
                value={this.state.email}
                onChange={(e) => this.handleField(e, "email")}
              />
            </LinkWrapper>
            <LinkWrapper>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                placeholder="Enter Your Password..."
                value={this.state.password}
                onChange={(e) => this.handleField(e, "password")}
              />
            </LinkWrapper>
            <LinkWrapper>
              <Button fullWidth color="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </LinkWrapper>
          </Menu>
        </Card>
      </Container>
    );
  }
}

export default withRouter(SignIn);
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
`;
const Card = styled.div`
  width: 30rem;
  height: 30rem;
  padding: 3rem;
  box-shadow: 0px 12px 23px -7px;
  border-radius: 1rem;
`;
const HeadLink = styled.h2`
  text-align: center;
  height: 1.4rem;
  cursor: pointer;
  color: #f80085b3;
  font-weight: 500;
  font-size: 1.2rem;
`;
const Menu = styled.div``;
const LinkWrapper = styled.div`
  margin: 2rem;
  text-align: center;
`;
const Button = styled.button`
  font-size: 0.8rem;
  background: #165d7285;
  border: none;
  color: #fff;
  transition: all 0.3s ease-in;
  // box-shadow: 0px 13px 24px -7px #ecb6d7;
  border-radius: 1rem;
  padding: 0.8rem 1.1rem;
  width: 12rem;
  transition: all 0.3s ease-in;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 13px 24px -11px #ecb6d7;
    transform: translateY(-5px);
  }
`;
