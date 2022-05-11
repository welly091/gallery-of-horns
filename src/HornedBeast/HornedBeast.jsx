import React, { Component } from 'react'
import './HornedBeast.css'
import {Card, Button} from 'react-bootstrap'

export default class HornedBeast extends Component {
  constructor(props){
    super(props)
    this.state ={
      voteCount: 0,
    }
  }

  updateCount = () => {
    this.setState({
      voteCount: this.state.voteCount+1,
    })
  }

  render() {
    return (
      <div >
          <Card className='beast'>
            <Card.Img variant="top" src={this.props.imgUrl} onClick={this.updateCount}/>
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Button variant="light" className="likeButton">❤️ {this.state.voteCount}</Button>
              <Card.Text className="description" >
                {this.props.description}
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    )
  }
}
