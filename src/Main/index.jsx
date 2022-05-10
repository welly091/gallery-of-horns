import React, { Component } from 'react'
import HornedBeast from '../HornedBeast'
import data from '../data.json'

export default class Main extends Component {
  render() {
    return (
      <div>
          {
            data.map(item =>{
              return <HornedBeast key={item._id} title={item.title} imgUrl={item.image_url} description={item.description} alt={item.keyword}/>
            })
          }
      </div>
    )
  }
}
