import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import './SelectedBeast.css'

export default class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.isModalOpen} onHide={this.props.closeModal}className="modal" >
        <img src={this.props.imgUrl} alt={this.props.title}></img>
        <div>{this.props.description}</div>
      </Modal>
    )
  }
}
