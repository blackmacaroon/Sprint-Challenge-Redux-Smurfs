import React from 'react';
import { addSmurf } from '../actions';


class SmurfForm extends React.Component {
      state = {
            newSmurf: {
                  name: '',
                  age: '',
                  height: ''
            }
      }

      handleInputChange = e => {
            this.setState({
                  newSmurf: {
                        ...this.state.newSmurf,
                        [e.target.name]: e.target.value
                  }
            })
      }

      handleSubmit = e => {
            e.preventDefault();
            this.props.addSmurf(this.state.newSmurf)
            this.setState({
                  newSmurf: {
                        name: '',
                        age: '',
                        height: ''
                  }
            })
      }


      render() {
            return (
                  <div className='SmurfForm'>
                        <form onSubmit={this.handleSubmit}>
                              <input
                                    onChange={this.handleInputChange}
                                    placeholder='name'
                                    value={this.state.newSmurf.name}
                                    name='name'
                              />
                              <div className='baseline' />
                              <input
                                    onChange={this.handleInputChange}
                                    placeholder='age'
                                    value={this.state.newSmurf.age}
                                    name='age'
                              />
                              <div className='baseline' />
                              <input
                                    onChange={this.handleInputChange}
                                    placeholder='height'
                                    value={this.state.newSmurf.height}
                                    name='height'
                              />
                              <div className='baseline' />
                              <button className='add-butt' type='submit'>Add to the village</button>
                        </form>

                  </div>
            )
      }
}

export default SmurfForm;