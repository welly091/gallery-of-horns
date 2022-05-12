import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="container">
          <h1>Welcome to Gallery of Horns! </h1>
          <div className="voteText">Vote For Your Favortie!</div>
      </div>
    )
  }
}
