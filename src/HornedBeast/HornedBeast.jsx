import React, { Component } from 'react'
import './HornedBeast.css'
import {Card, Button} from 'react-bootstrap'
import SelectedBeast from '../SelectedBeast/SelectedBeast.jsx'

export default class HornedBeast extends Component {
  constructor(props){
    super(props)
    this.state ={
      voteCount: 0,
      isModalOpen: false,
      onShow: true
    }
  }

  static getDerivedStateFromProps(props,state){
    if(props.onShow !== state.onShow) return {onShow: props.onShow}
    return null
  }

  openModal =() =>{
    this.setState({
      isModalOpen: true
    })
  }
  closeModal =() =>{
    this.setState({
      isModalOpen: false
    })
  }

  updateCount = () => {
    this.setState({
      voteCount: this.state.voteCount+1,
    })
  }

  render() {
    return (
      <>
          { this.state.onShow ? 
          <div>
            <Card className='beast'>
              <Card.Img className='beastImg' variant="top" src={this.props.imgUrl} onClick={this.openModal}/>
              <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Button variant="light" className="likeButton">❤️ {this.state.voteCount}</Button>
              <Button variant="light" className="likeButton" onClick={this.updateCount}>Like</Button>
                <Card.Text className="description" >
                  {this.props.description}
                </Card.Text>
              </Card.Body>
            </Card>
            <SelectedBeast 
              imgUrl={this.props.imgUrl} 
              title={this.props.title}
              description={this.props.description}
              isModalOpen={this.state.isModalOpen}
              closeModal={this.closeModal}
            ></SelectedBeast> 
          </div>: <></>
          }
      </>
    )
  }
}
