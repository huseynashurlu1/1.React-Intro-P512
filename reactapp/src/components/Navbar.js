import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div className='bg-dark py-2 text-white fw-bold'>{this.props.title}</div>
    )
  }
}

export default Navbar