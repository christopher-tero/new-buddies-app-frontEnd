import React, {Component} from 'react';
import Header from './Containers/Header'
import CardContainer from './Containers/CardContainer'
import './App.css';

const data = [{
  name: "Bingo",
  species: "Dog",
  size: "Some size",
  breed: "Irish Setter",
  gender: "Some gender",
  age: 0,
  picture: "Some pic url",
  info: "Some added details",
  location: "Somewhere out there",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
}]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data}
  }

  render() {
    return (
      <div>
        <Header />
        <CardContainer data={this.state.data} />
      </div>
    )
  }
}
