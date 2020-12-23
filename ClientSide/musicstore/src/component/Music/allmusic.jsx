import React, { Component } from "react";
import axios from "axios";
export class allmusic extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cart : []
        }
    }
    handleSelectData=(data)=>{
        axios
        .delete(`http://localhost:8080/delTrack/${data}`)
        .then((response) => {
        window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
        window.location.reload()
        }
    handleSelectForAddToCart=(data)=>{
        axios
        .get(`http://localhost:8080/cart/${data}`)
        .then((response) => {
            console.log(response.data);
            this.state.cart.push(response.data)
            console.log(this.state.cart);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    render() {
    return (
      <div>
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
                {this.props.musicdata.map((data) => {
                  return (
                    <tr>
                      <th scope="row">{data.albumName}</th>
                      <td>{data.trackName} </td>
                      <td>{data.artistName} </td>
                      <td>{data.albumYear}</td>
                      <td>{data.trackPrice}</td>
                      <td>
                        <span class="btn btn-sm btn-warning"  onClick={() => 
                          this.handleSelectForAddToCart(data._id)}>
                          <i class="fa fa-edit"></i>
                        </span>
                      
                        <span class="btn btn-sm btn-danger" style={{marginLeft:"1rem"}}  onClick={() => 
                          this.handleSelectData(data._id)}>
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

export default allmusic;
