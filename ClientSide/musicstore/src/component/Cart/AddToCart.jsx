import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Logo from "../../assets/M.svg";
import Security from "../../assets/security.svg";
import { withRouter } from "react-router-dom";
import axios from 'axios';
const theme = createMuiTheme({
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: "#c7670f",
      },
      root: {
        width: "65px",
        height: "65px",
        fontSize: "1.8rem",
      },
    },
  },
});
export class AddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.location.state,
      sum: 0,
      priceArr: [],
    };
  }
  handleAddmusic = () => {
    this.props.history.push("/musicList");
  };
  arrayIn = () => {
    let value = 0;
    this.state.cart.map((key) => {
      return (value += key.unitprice);
    });
    this.setState({
      sum: value,
    });
  };
  componentDidMount() {
    this.arrayIn();
  }
  handleSelectData=(data)=>{
      console.log(data);
    axios.delete(`http://localhost:8080/deleteCart/${data}`).then((res)=>{
        console.log("deleted");
    }).then((err)=>{
        console.log(err);
    })
  }
  render() {
    console.log(this.state.cart);

    return (
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#ffd7de87", padding:"0", margin :"0" }}
      >
        <Nav>
          <Container>
            <Menu>
              <LinkWrapper>
                <MuiThemeProvider theme={theme}>
                  <HeadLink>
                    <Avatar>
                      <img src={Logo} alt="Logo" width="100" height="50" />
                    </Avatar>
                  </HeadLink>
                </MuiThemeProvider>
              </LinkWrapper>
            </Menu>
            <Menu>
              <LinkWrapper>
                <span>
                  <img src={Security} alt="Logo" width="100" height="50" />
                </span>
                <span style={{ fontWeight: "500", color: "green" }}>
                  100% Secure
                </span>
              </LinkWrapper>
            </Menu>
          </Container>
        </Nav>
        <SubContainer>
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <h4>Add More Item Securely</h4>
              <Button onClick={this.handleAddmusic}> + ADD Music</Button>
            </div>

            <Listt>
              <SubList>Track Name</SubList>
              <SubList>Unit Price</SubList>
              <SubList> Item ID</SubList>
              <SubList>Action</SubList>
            </Listt>
            {this.props.location.state.map((key) => {
              return (
                <List>
                  <SubList>{key.trackname} </SubList>
                  <SubList>{key.unitprice}</SubList>
                  <SubList>{key._id}</SubList>
                  <SubList>
                  <span
                          class="btn btn-sm btn-danger"
                          style={{ marginLeft: "1rem" }}
                          onClick={() => this.handleSelectData(key._id)}
                        >
                          <i class="fa fa-trash"></i>
                        </span>
                  </SubList>
                </List>
              );
            })}
            <ul>
              <MainDetails><h5>Price Detail ({this.props.location.state.length}) Item</h5></MainDetails>
              <MainDetails>
                <Details>
                  <li>Total Price</li>
                  <li>{this.state.sum}</li>
                </Details>
              </MainDetails>
              <MainDetails>
                <Details>
                  <li>DisCount On MRP </li>
                  <li>-RS. 0</li>
                </Details>
              </MainDetails>
              <MainDetails>
                <Details>
                  <li>Coupan Discount </li>
                  <li> Applay Coupan</li>
                </Details>
              </MainDetails>
              <MainDetails>
                <Details>
                  <li>PlateFarm handle fee </li>
                  <li>Free</li>
                </Details>
              </MainDetails>
              <MainDetails>
                <Details style={{borderTop:"1px solid"}}>
                  <li>
                    <h5>Total Amount</h5>
                  </li>
                  <li>
                    <h5>{this.state.sum}</h5>
                  </li>
                </Details>
              </MainDetails>
            </ul>
          </Card>
        </SubContainer>
      </div>
    );
  }
}

export default withRouter(AddToCart);

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
  //   background-color: #ffd7de87;
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
  @media (max-width: 670px) {
    padding: 0.03rem;
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
const Button = styled.button`
  font-size: 1rem;
  background: #f774c5;
  border: none;
  color: #fff;
  transition: all 0.3s ease-in;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  border-radius: 1rem;
  padding: 0.8rem 1.1rem;
  transition: all 0.3s ease-in;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 13px 24px -11px #ecb6d7;
    transform: translateY(-5px);
  }
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
`;
const Card = styled.div`
  padding: 2rem;
  width: 65rem;
  height: 66vh;
  margin: 5rem;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #ff009254;
  padding: 0.9rem;
  font-size: 1rem;
  font-family: timesNewRoman;
  font-weight: 600;
`;

const SubList = styled.li`
  list-style-type: none;
`;
const Listt = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #ff0092a3;
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: timesNewRoman;
  font-weight: 600;
`;
const Details = styled.ul`
display : flex;
justify-content : space-between;
list-style-type : none;
color : green;
`;
const MainDetails = styled.li`
// display : flex;
// justify-content : space-between;
list-style-type : none;
color : green;
`;
