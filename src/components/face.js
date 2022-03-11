import React, { Component } from 'react'
import axios from 'axios'


export default class card extends Component {
  state = {
    success: "",
    message: "",
    hostname: "",
    time: "",
    errMessage: ""
  }
  componentDidMount() {
    axios.get('https://api.factoryfour.com/' + this.props.name + '/health/status')
      .then(res => {
        const date = new Date();
        date.setTime(res.data.time)
        const time = date.toLocaleTimeString()
        console.log(res)

        this.setState({
          success: res.data.success,
          message: res.data.message.split(" ")[0],
          hostname: res.data.hostname,
          time: time
        })
      }
      )
      .catch(function (error) {
        var successErr = false;
        if (error.request) {            // Entra en esta rama
          /*console.log("Error")
          console.log(error)
          console.log("Error.request:")
          console.log(error.request)*/
          console.log("el error request status es: " + error.request.status)
          /*
          console.log("el error response status es: " + error.response.status) // no lo reconoce 
          console.log("el error response status.data es: " + error.response.data) // no lo reconoce */
          successErr = true;
          
        } else if (error.response) {
          console.log(error.response.status) // No se viene por esta rama
          console.log("Hubo error en el response")
          if (error.response.status === 503) {
            console.log("Error 503");    // No se viene por esta rama
          }
          console.log("Error del request")
          console.log(error.request.success)
          console.log(successErr)
        } else if (successErr){
          console.log("hola mundo")
          this.setState({
            success: "false",
            message: "Error",
            hostname: "",
            time: "",
            errMessage: ""
          })
        }
        // console.log(error.config);
      }

      )
  }

  // }))
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
  // this.setState({
  //   success: res.data.success,
  //   message: res.data.message.split(" ")[0],
  //   hostname: res.data.hostname,
  //   time: res.data.time
  // })
  // }


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
                <h5 className="card-title bg-success text-white">{this.errSuccess ? this.errMessage : this.state.message}</h5>
                <p className="card-text">{this.state.hostname}</p>
              </div>
              <div className="card-footer text-muted">
                {this.state.time}
              </div>
            </div>

          </div>
        </div>


      </div>
    )
  }
}





<div className='mx-3 my-2'>
          <h1>{this.state.name}</h1>
          <div className="">
            <div className={"col-2 rounded order-" + this.props.order}>
              <div className="card shadow-lg  text-center">
                <div className="card-header">
                  {this.props.name.toUpperCase()}
                </div>
                <div className="card-body">
                  {this.errSuccess?
                {<h5 className="card-title bg-success text-white"> }
              :
                <h5 className="card-title bg-success text-white">this.errSuccess ? this.errMessage : this.state.message}</h5>
                <p className="card-text">{this.state.hostname}</p>
                </div>
                <div className="card-footer text-muted">
                  {this.state.time}
                </div>
              </div>
            </div>
          </div>
        </div>