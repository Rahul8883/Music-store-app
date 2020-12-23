import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
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
export class musicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarValue: "",
      allmusic: [],
      text: "",
      cart: [],
    };
  }
  componentDidMount() {
    let data = localStorage.getItem("email");
    var res = data.charAt(0).toUpperCase();
    this.setState({
      avatarValue: res,
    });
    this.getAllMusic();
  }
  getAllMusic = () => {
    try {
      axios
        .get("http://localhost:8080/getTracks")
        .then((response) => {
          console.log(response.data);
          this.setState({
            allmusic: response.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  handleAddmusic = () => {
    this.props.history.push("/addmusic");
  };
  handleField = (event, value) => {
    this.setState({ [value]: event.target.value });
  };
  handleCart = () => {
      axios.get("http://localhost:8080/getCartItem").then((res)=>{
          console.log(res.data); 
          this.props.history.push("/cart", res.data);
      })
  
  };
  handleSelectData = (data) => {
    axios
      .delete(`http://localhost:8080/delTrack/${data}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };
  handleSelectForAddToCart = (data) => {
    axios
      .get(`http://localhost:8080/cart/${data}`)
      .then((response) => {

        console.log(response.data.trackName);
        var cartItem = {
            "trackname": response.data.trackName,
            "unitprice" : response.data.trackPrice,
            "trackid" : response.data._id
        };
        axios
          .post("http://localhost:8080/addToCart", cartItem)
          .then((res) => {
            console.log("success", res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Nav>
          <Container>
            <Menu>
              <LinkWrapper>
                <MuiThemeProvider theme={theme}>
                  <HeadLink>
                    <Avatar>{this.state.avatarValue}</Avatar>
                  </HeadLink>
                </MuiThemeProvider>
              </LinkWrapper>
            </Menu>
            <Menu>
              <LinkWrapper>
                <input
                  style={{
                    padding: "5px 8px 5px 8px",
                    borderRadius: "22px",
                    borderStyle: "none",
                  }}
                  type="search"
                  placeholder="Search..."
                  value={this.state.text}
                  onChange={(e) => this.handleField(e, "text")}
                />
                <Button onClick={this.handleCart}>Cart Item</Button>
                <Button onClick={this.handleAddmusic}> + Add Music</Button>
              </LinkWrapper>
            </Menu>
          </Container>
        </Nav>
        <div class="card">
          <div class="card-body" style={{ marginTop: "6rem" }}>
            <table class="table table-hover">
              <thead class="table-dark">
                <tr>
                  <th scope="col">Album Name</th>
                  <th scope="col"> Track Name</th>
                  <th scope="col">Artist Name</th>
                  <th scope="col">Album Year</th>
                  <th scope="col">Track Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allmusic.map((data) => {
                  return (
                    <tr>
                      <th scope="row">{data.albumName}</th>
                      <td>{data.trackName} </td>
                      <td>{data.artistName} </td>
                      <td>{data.albumYear}</td>
                      <td>{data.trackPrice}</td>
                      <td>
                        <span
                          class="btn btn-sm btn-warning"
                          onClick={() =>
                            this.handleSelectForAddToCart(data._id)
                          }
                        >
                          <i class="fa fa-edit"></i>
                        </span>

                        <span
                          class="btn btn-sm btn-danger"
                          style={{ marginLeft: "1rem" }}
                          onClick={() => this.handleSelectData(data._id)}
                        >
                          <i class="fa fa-trash"></i>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(musicList);

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
  background-color: #ffd7de87;
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
  font-size: 0.8rem;
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