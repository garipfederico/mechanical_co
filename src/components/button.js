import axios from 'axios';
import React, { Component } from 'react'




export default class button extends Component {
onclick = async e => {
    e.prevent.Default();
    await axios.get('https://api.factoryfour.com/invites/health/status')
    console.log.
}

    render() {
    return (
      <button onclick={this.onclick }>button</button>
    )
  }
}
