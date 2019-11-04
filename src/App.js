import React from 'react';

class App extends React.Component {
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(r => r.json())
            .then(j => console.log(j));
    }

    render() {
        return (<div>
            asdf
        </div>)
    }
}

export default App;