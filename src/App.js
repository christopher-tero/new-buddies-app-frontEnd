import React, {Component} from 'react';
import Header from './Containers/Header'
import CardContainer from './Containers/CardContainer'
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      petData: undefined
    }
  }

  componentDidMount(){
    this.getBuddies()
  }

  getBuddies = () => {
    let url = "http://localhost:3000/pets"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({petData: result}))
  }

  render() {
    console.log(this.state.petData)
    return (
      <div>
        {this.state.petData
          ? <CardContainer data={this.state.petData} />
          : <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
        }
        <Header />
      </div>
    )
  }
}
