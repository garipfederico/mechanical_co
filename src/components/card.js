import React, { Component } from 'react'
import axios from 'axios'
import CardOK from './CardOK'
import CardFailed from './CardFailed'

export default class card extends Component {
  state = {
    seconds: 0,
    success: "",
    message: "",
    hostname: "",
    time: "",
    errMessage: "",
    errStatus: ""
  }

  timerUpdate() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 15
    }))
  }

  componentDidMount() {
    let successErr = false;
    let status = '';
    axios.get('https://api.factoryfour.com/' + this.props.name + '/health/status')
      .then(res => {
        const date = new Date();
        date.setTime(res.data.time)
        const time = date.toLocaleTimeString()

        this.setState({
          success: res.data.success,
          message: res.data.message.split(" ")[0],
          hostname: res.data.hostname,
          time: time
        })
      }
      )
      .catch(function (error) {
        if (error.request) {
          successErr = true;
          if (error.request.status === 0) { }
          status = "Status" + error.request.status;

          if (error.request.status === 503) {
            status = error.request.status + " Service Unavailable";
          }
        } else if (error.response) {
          if (error.response.status === 503) {
            status = error.response.status + "Service Unavailable";
          }
        }
      }
      ).then(() => {
        if (successErr === true) {
          this.setState({
            success: false,
            message: "Error",
            errMessage: "OUTAGE",
            errStatus: status
          })
        }
        this.interval = setInterval(() => this.timerUpdate(), 60000);
      })
  }
  componentWillUnmount() {
     clearInterval(this.interval); }




  render() {
    let cardok = <CardOK
      order={this.props.order}
      name={this.props.name}
      message={this.state.message}
      hostname={this.state.hostname}
      time={this.state.time}
    >
    </CardOK>;

    let cardfailed = <CardFailed
      order={this.props.order}
      name={this.props.name}
      message={this.state.message}
      errMessage={this.state.errMessage}
      status={this.state.errStatus}
    >
    </CardFailed>;

    return (
      <div>
        {(this.state.success) ? cardok : cardfailed}

      </div>
    )
  }
}
