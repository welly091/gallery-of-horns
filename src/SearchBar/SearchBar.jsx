import React, { Component } from 'react'
import { FormControl, InputGroup , Button, Form} from 'react-bootstrap'
import './SearchBar.css'

export default class SearchBar extends Component {

  constructor(props){
      super(props)
      this.state={
          searchValue: ""
      }
  }
  
  findBeasts = (e) =>{
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) =>{
      this.props.updateSearchTitle(this.state.searchValue)
      e.preventDefault()
  }

  resetValue = () =>{
    this.setState({searchValue: ""})
    this.props.updateSearchTitle("")
  }
  
  render() {
    return (
        <div className='searchBar'>
            <Form  onSubmit={this.handleSubmit}>
                <InputGroup size="md" className='px-5 mb-3' >
                    <FormControl className="search m-2" placeholder="Search beast name..." value={this.state.searchValue} onChange={this.findBeasts}></FormControl>
                    <Button variant="primary" className="m-2" type='submit'>Search</Button>
                    <Button variant="warning" className="m-2" onClick={this.resetValue} >Reveal all beasts</Button>
                </InputGroup>
            </Form>
        </div>
      

    )
  }
}
