import React, { Component } from 'react'
import LoginForm from './form/LoginForm';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from '../actions/auth'
import { Container } from 'semantic-ui-react';

class LoginPage extends Component {
  submit = data => this.props.login(data).then(() => this.props.history.push("/"))
  render() {
    return (
      <Container>
        <h1>Đăng nhập</h1>
        <LoginForm submit={this.submit} />
      </Container>
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}
export default connect(null, { login })(LoginPage)