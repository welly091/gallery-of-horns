import React, { Component } from 'react'
import HornedBeast from '../HornedBeast/HornedBeast.jsx'
import data from '../data.json'
import './Main.css'
import SearchBar from '../SearchBar/SearchBar.jsx'

export default class Main extends Component {
  
  constructor(props){
    super(props)
    this.state={searchTitle:""}
  }

  updateSearchTitle =(title) =>{
    this.setState({searchTitle: title})
  }

  render() {
    const{searchTitle} = this.state
    return (
      <div >
        <div>
          <SearchBar searchTitle={searchTitle} updateSearchTitle={this.updateSearchTitle} data={this.data}/>
        </div>
        <div className="beasts">
          {
            data.map(item => { 
              return <HornedBeast 
              key={item._id} 
              title={item.title} 
              imgUrl={item.image_url} 
              description={item.description} 
              alt={item.keyword}
              onShow={item.title.includes(searchTitle)}
              />
            })
          }
        </div>
      </div>
    )
  }
}
