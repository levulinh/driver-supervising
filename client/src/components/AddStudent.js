import React, { Component } from 'react'
import {Form,Button, Container} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import AddStudentForm from './AddStudentForm';
import {connect} from 'react-redux'
import { addStudent } from '../actions/auth'

class AddUser extends Component {
  submit = data => this.props.addStudent(data)
  render() {
    return (
    <Container>
      <AddStudentForm submit={this.submit}/>
    </Container>
    )
  }
}


AddUser.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  addStudent: PropTypes.func.isRequired
}
export default connect(null, { addStudent })(AddUser)