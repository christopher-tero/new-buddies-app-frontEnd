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
  picture: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
  info: "Some added details",
  location: "Somewhere out there",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
  picture: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
  picture: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
  picture: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
}, {
  name: "Milo",
  species: "Cat",
  size: "Some size",
  breed: "Mixed",
  picture: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
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
