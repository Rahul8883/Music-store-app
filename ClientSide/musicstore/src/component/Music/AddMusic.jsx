import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../Navbar";
export class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackName: "",
      artistName: "",
      albumName: "",
      albumYear: "",
      trackPrice: "",
    };
  }
  handleField = (event, value) => {
    this.setState({ [value]: event.target.value });
  };
  handleSubmit = () => {
    let loginValue = {
      trackName: this.state.trackName,
      artistName: this.state.artistName,
      albumName: this.state.albumName,
      albumYear: this.state.albumYear,
      trackPrice: this.state.trackPrice
    };
    axios
      .post("http://localhost:8080/tracks", loginValue)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/musicList");
  };
  render() {
    const {trackName, artistName, albumName,albumYear, trackPrice} = this.state
    console.log(trackName, artistName, albumName,albumYear, trackPrice);
    return (
      <Container>
        <Navbar />
        <Card>
          <div style={{ marginTop: "6rem" }}>
            <div class="card-header">
              <h4 class="font-weight-bold">Add New Music</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label class="col-form-label" for="trackName">
                      Track Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="trackname"
                      placeholder="Enter Track Name"
                      id="trackName"
                      value={this.state.trackName}
                      onChange={(e) => this.handleField(e, "trackName")}
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="col-form-label" for="trackName">
                      Artist Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="trackname"
                      placeholder="Enter Artist Name"
                      id="trackName"
                      value={this.state.artistName}
                      onChange={(e) => this.handleField(e, "artistName")}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label class="col-form-label" for="trackName">
                      Album Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="trackname"
                      placeholder="Enter Album Name"
                      id="trackName"
                      value={this.state.albumName}
                      onChange={(e) => this.handleField(e, "albumName")}
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="col-form-label" for="trackName">
                      Album Year
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      name="trackname"
                      placeholder="Enter Album Year"
                      id="trackName"
                      value={this.state.albumYear}
                      onChange={(e) => this.handleField(e, "albumYear")}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label class="col-form-label" for="trackName">
                      Track Price
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      name="trackname"
                      placeholder="$"
                      id="trackName"
                      value={this.state.trackPrice}
                      onChange={(e) => this.handleField(e, "trackPrice")}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}
                >
                  <div class="form-group">
                    <Button
                      fullWidth
                      color="primary"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </Button>
                    <Button
                      fullWidth
                      color="primary"
                      onClick={this.handleCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    );
  }
}

export default withRouter(Music);
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
  width: 59rem;
  height: 38rem;
  padding: 2rem;
  box-shadow: 0px 12px 23px -7px;
  border-radius: 1rem;
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
