import React, { Component } from 'react'

export default class HornedBeast extends Component {
  render() {
    return (
      <div>
          <h2>{this.props.title}</h2>
          <img src={this.props.imgUrl} alt={this.props.keyword}></img>
          <p>{this.props.description}</p>
      </div>
    )
  }
}
