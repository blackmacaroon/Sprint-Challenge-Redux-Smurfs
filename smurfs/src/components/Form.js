import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
      state = {
            name: '',
            age: '',
            height: ''
      }

      handleChanges = e => {
            this.setState({
                  ...this.state,
                  [e.target.name]: e.target.value
            })
      }

      render() {
            return (
                  <div className='SmurfForm'>
                        <form onSubmit={this.addSmurf}>
                              <input
                                    onChange={this.handleInputChange}
                                    placeholder='name'
                                    value={this.state.name}
                                    name='name'
                              />
                              <div className='baseline' />
                              <input
                                    onChange={this.handleInputChange}
                                    placeholder='age'
                                    value={this.state.age}
                                    name='age'
                              />
                              <div className='baseline' />
                              <input
                                    onChange={this.handleInputChange}
                                    placeholder='height'
                                    value={this.state.height}
                                    name='height'
                              />
                              <div className='baseline' />
                              <button className='add-butt' type='submit'>Add to the village</button>
                        </form>

                  </div>
            )
      }
}

