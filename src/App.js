// create your App component here
import React from 'react';

export default class App extends React.PureComponent {


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(astroData => console.log(astroData))
    }
    
    render() {
        return(
            <div></div>
        )
    }
}