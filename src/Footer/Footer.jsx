import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <h6>Question? Reach Me</h6>
          <a href="mailto: whtp1490@gmail.com"><i className="bi bi-google fs-2 text-light"></i></a>&nbsp;&nbsp;
          <a href="https://github.com/welly091/"><i className="bi bi-github fs-2 text-light"></i></a>&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh-7b11a0b4/"><i className="'bi bi-linkedin fs-2 text-light"></i></a>
          <p>© 2022 Powered by GeekyWelly.com</p>
        </div>
      </div>
    )
  }
}
