import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import './SelectHorns.css'

export default class SelectHorns extends Component {
    constructor(props){
        super(props)
        this.state={
            allHorns:this.props.hornArray
        }
    }

    updateSelectedHorns = (e) => {
        e.preventDefault()
        if(e.target.value === "All") this.props.updateHornArray(this.state.allHorns);
        else this.props.updateHornArray([parseInt(e.target.value)])
    }

    render() {
        console.log(this.props.hornArray)
        return (
        <Form className="mb-4 p-2" >
            <Form.Group>
                <Form.Label htmlFor="hornSelect" className="label">Select Horn Numbers</Form.Label>
                <Form.Select id="hornSelect" type="submit" onChange={this.updateSelectedHorns} >
                    <option value="All">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>
            </Form.Group>
        </Form>
        )
    }
}
