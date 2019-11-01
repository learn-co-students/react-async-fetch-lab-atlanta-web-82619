// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = {
    people : []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        people: data.people
      })
    })
  }

  render() {
    const folks = this.state.people.map(person => <li> {person.name} on {person.craft}</li>)
    return (
      <div>
        <h1> {this.state.people.length} People Currently In Space</h1>
        <ul>{folks}
        </ul>
      </div>

    )
  }

}

export default App;
