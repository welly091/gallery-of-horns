import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import './SelectedBeast.css'

export default class SelectedBeast extends Component {
  render() {
    return (
      <div onClick={this.props.closeModal}>
        <Modal show={this.props.isModalOpen} className="modal" >
          <img src={this.props.imgUrl} alt={this.props.title}></img>
          <div>{this.props.description}</div>
        </Modal>
      </div>
    )
  }
}
