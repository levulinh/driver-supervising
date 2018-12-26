import React, { Component } from 'react'
import LoginForm from './LoginForm';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from '../../../actions/auth'
import { Container } from 'semantic-ui-react';

class Login extends Component {
  submit = data => this.props.login(data).then(() => this.props.history.push("/"))
  render() {
    return (
      <Container>
        <LoginForm submit={this.submit} />
      </Container>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}
export default connect(null, { login })(Login)