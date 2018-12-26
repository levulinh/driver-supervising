import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';
import { Form, Input,Message } from 'semantic-ui-react'
import Validator from 'validator'
import PropTypes from 'prop-types'
import InlineError from '../../../components/InlineError'

export default class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }
  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  })

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true })
      this.props.submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data.errors, loading: false }))
    }
  }

  validate = (data) => {
    const errors = {}
    if (!Validator.isEmail(data.email)) errors.email = "Email không đúng định dạng"
    if (!data.password) errors.password = "Không được trống"
    return errors
  }

  render() {
    const { data, errors, loading } = this.state
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit} loading={loading}>
                      <h1>Đăng nhập</h1>
                      <p className="text-muted">Quản trị hệ thống</p>
                      {errors.global && <Message negative>
                        <Message.Header content="Lỗi" />
                        <p>{errors.global}</p></Message>}
                      <Form.Field>
                        <label>Email</label>

                        <Input icon='mail' iconPosition='left' type='email' id='email' name='email' placeholder="admin@gmail.com"
                          value={data.email}
                          onChange={this.onChange} />
                        {errors.email && <InlineError text={errors.email} />}
                      </Form.Field>
                      <Form.Field>
                        <label>Mật khẩu</label>

                        <Input icon='lock' iconPosition='left' type='password' id='password' name='password' placeholder="******"
                          value={data.password}
                          onChange={this.onChange} />
                        {errors.password && <InlineError text={errors.password} />}
                      </Form.Field>
                      <Button color='blue'>Đăng nhập</Button>
                    </Form>
                  </CardBody>
                </Card>

              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

LoginForm.prototypes = {
  submit: PropTypes.func.isRequired
}



