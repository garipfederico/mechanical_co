import React, { Component } from 'react'
import axios from 'axios'

export default class card extends Component {
  state = {
    success: "",
    message: "",
    hostname: "",
    time: ""
  }
  async componentDidMount() {
    const res = await axios.get('https://api.factoryfour.com/' + this.props.name + '/health/status')
      // .catch(function (error) {
      //   console.log(error)
      //   if (error.response) {
      //     console.log("el codigo de error en response es: " + error.response.status)
      //     console.log('Respuesta')
      //     console.log(error.response.status)
      //   }
      //   // else if (error.request || error.request.status === 503) {
      //   else if (error.request) {
      //     console.log("el codigo de error en request es: " + error.request.status)
      //     // this.setState({
      //     //   success: false,
      //     //   message: "Error",
      //     //   hostname: "fffgdfgdg",
      //     //   time: "dfgdfgdfgdfg"
      //     // })
      //   } else {
      //     console.log("otra cosa")
      //   }
      // }
      // )
    this.setState({
      success: res.data.success,
      message: res.data.message.split(" ")[0],
      hostname: res.data.hostname,
      time: res.data.time
    })
    
  }

  render() {
    return (
      <div className='m-2'>
        <h1>{this.state.name}</h1>
        <div className="row">
          <div className={"  order-" + this.props.order}>

            <div className="card text-center">
              <div className="card-header">
                {this.props.name.toUpperCase()}
              </div>
              <div className="card-body">
                <h5 className="card-title bg-success text-white">{this.state.message}</h5>
                <p className="card-text">{this.state.hostname}</p>
              </div>
              <div className="card-footer text-muted">
                {this.state.time}
                2 days ago
              </div>
            </div>

          </div>
        </div>


      </div>
    )
  }
}
