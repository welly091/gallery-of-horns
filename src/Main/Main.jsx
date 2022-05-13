import React, { Component } from 'react'
import HornedBeast from '../HornedBeast/HornedBeast.jsx'
import data from '../data.json'
import './Main.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import SelectHorns from '../SelectHorns/SelectHorns.jsx'

export default class Main extends Component {
  
  constructor(props){
    super(props)
    this.state={
      searchTitle:"",
      hornArray: [1,2,3,100]
    }
  }

  updateSearchTitle =(title) =>{
    this.setState({searchTitle: title})
  }

  updateHornArray = (hornArray) =>{
    this.setState({hornArray: hornArray})
  }

  render() {
    const{searchTitle, hornArray} = this.state
    return (
      <div >
        <div>
          <SearchBar searchTitle={searchTitle} updateSearchTitle={this.updateSearchTitle} data={this.data}/>
        </div>
        <SelectHorns updateHornArray={this.updateHornArray} hornArray={this.state.hornArray}></SelectHorns>
        <div className="beasts">
          {
            data.map(item => { 
              return <HornedBeast 
              key={item._id} 
              title={item.title} 
              imgUrl={item.image_url} 
              description={item.description} 
              alt={item.keyword}
              onShow={item.title.toLowerCase().includes(searchTitle.toLowerCase()) && hornArray.includes(item.horns) }
              hornCount={item.horns}
              />
            })
          }
        </div>
      </div>
    )
  }
}
