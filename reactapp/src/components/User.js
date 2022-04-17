import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: true
        }
    }

    ToggleHandler = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    DeleteUser = (e) =>{
        const {id,deleteUser} = this.props;

        deleteUser(id);
    }

  render() {
      const {name,salary,branch} = this.props;
      const {isVisible} = this.state;
    return (
      <div className='col-12 col-lg-6 mt-4'>
          <div className="card">
              <div className="card-header text-white bg-success d-flex justify-content-between align-items-center">
                  <h5 onClick={this.ToggleHandler} style={{cursor: "pointer"}} className='m-0'>{name}</h5>
                  <i onClick={this.DeleteUser} style={{cursor:"pointer"}} className="fa-solid fa-trash-can"></i>
              </div>
            {
                isVisible ? <div className="card-body">
                <ul>
                    <li>Worker Name: {name}</li>
                    <li>Salary: {salary}</li>
                    <li>Job: {branch}</li>
                </ul>
            </div> : null
            }
        </div>
      </div>
    )
  }
}

User.defaultProps = {
    name: "No Data",
    salary: "No Data",
    branch: "No Data",
    deleteUser: "No Func"
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    branch: PropTypes.number.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default User