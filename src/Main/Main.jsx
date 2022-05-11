import React, { Component } from 'react'
import HornedBeast from '../HornedBeast/HornedBeast.jsx'
import data from '../data.json'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <div className="beasts">
          {
            data.map(item => { 
              return <HornedBeast 
              key={item._id} 
              title={item.title} 
              imgUrl={item.image_url} 
              description={item.description} 
              alt={item.keyword}/>
            })
          }
      </div>
    )
  }
}
