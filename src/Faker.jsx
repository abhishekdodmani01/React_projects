import React, { Component } from 'react'
import {faker} from "@faker-js/faker"

export default class Faker extends Component {
    constructor(){
        super()
        {
            this.state ={
                photo: faker.image.avatar(),
                username:faker.internet.userName()

            }
        }
    }

    handleChange =()=>{
        this.setState({photo:faker.image.avatar()} )
    }

    handleUsername=()=>{
        this.setState({username:faker.internet.username()})
    }

  render() {
    return (
      <div>
        <img src={this.state.photo} alt="" />
        <button onClick={this.handleChange}>change image</button>
        <h1>{this.state.username}</h1>
        <button onClick={this.handleUsername}>click me</button>

      </div>
    )
  }
}