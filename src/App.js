// create your App component here
import React, { Component } from 'react';

const notes = 'http://api.open-notify.org/astros.json'



class App extends Component {
  state = {
    lab: []
  }

  componentDidMount(){
    fetch(notes)
    .then(res => res.json())
    .then(lab_fetch => {
      this.setState({
        lab: lab_fetch
      })
    })
}
  render() {
    // console.log(this.state)
    return (
      <div className="app">
        
        <h1> klcm </h1>
      </div>
    );
  }
}

export default App;