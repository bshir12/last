import React, { Component } from 'react'
import axios from "axios";
import { useNavigate} from "react-router-dom";

export default class index extends Component {
    constructor(props) {
        super(props);
    
        this.state = { namaProduk: '', deskripsi: '' }
      }
      handleChange = (ex) => {
        this.setState({ [ex.target.name]: ex.target.value })
      }
      addLogin = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/api/v1/produk", this.state)
          .then(response => {
            localStorage.setItem("namaProduk", this.state.namaProduk)
            localStorage.setItem("deskripsi", this.state.deskripsi)
            window.location.href = (`/detailproduct/`)
          })
          .catch(error => {
            console.log(error)
          })
      }
      render() {
        
        const {
            namaProduk,
          deskripsi
        } = this.state
     
    return (
        <>
        <div>LoginPage</div>
        <input type="text" name='namaProduk' value={namaProduk} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : Portgas D Ace' onChange={this.handleChange} />

        <input type="text" name='deskripsi' value={deskripsi} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : Portgas D Ace' onChange={this.handleChange} />
        <button
            className="bg-orange-400 text-white hover:shadow-lg hover:bg-orange-800 w-60 transition-all duration-150 rounded-md ml-56 mb-5 h-8"
            type="button"
            onClick={this.addLogin}
          >Create Account
          </button>
        </>
    )
  }
}
