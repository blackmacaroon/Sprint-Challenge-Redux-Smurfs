import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getSmurfs } from '../actions'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: []
  }

  componentDidMount() {
    console.log('component mounted', this.props)
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! </h1>
        <div className='smurf-list'>
          {this.props.smurfs.map(smurf => (
            <div className='smurf-card' key={smurf.id}>
              <h3>{smurf.name}</h3>
              <p>{smurf.age} years old.</p>
              <p>height: {smurf.height}</p>
            </div>
  
          ))}
        </div>
        
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
