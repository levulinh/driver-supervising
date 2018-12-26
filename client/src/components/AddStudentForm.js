import React, { Component } from 'react';
import {  Card, CardBody, CardGroup, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Form, Input,Message,Button } from 'semantic-ui-react'
import Validator from 'validator'
import PropTypes from 'prop-types'
import InlineError from './InlineError'

export default class AddStudentForm extends Component {
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

        <Container>
        <Form onSubmit={this.onSubmit} loading={loading}>
                  
                      {errors.global && <Message negative>
                        <Message.Header content="Lỗi" />
                        <p>{errors.global}</p></Message>}
                      <Form.Field>
                        <label>Số CMND</label>

                        <Input icon='mail' iconPosition='left' type='email' id='email' name='email' placeholder="admin@gmail.com"
                          value={data.email}
                          onChange={this.onChange} />
                        {errors.email && <InlineError text={errors.email} />}
                      </Form.Field>
                      <Form.Field>
                        <label>Họ và tên</label>

                        <Input icon='lock' iconPosition='left' type='password' id='password' name='password' placeholder="******"
                          value={data.password}
                          onChange={this.onChange} />
                        {errors.password && <InlineError text={errors.password} />}
                      </Form.Field>
                      <Form.Field>
                        <label>Số điện thoại</label>

                        <Input icon='lock' iconPosition='left' type='password' id='password' name='password' placeholder="******"
                          value={data.password}
                          onChange={this.onChange} />
                        {errors.password && <InlineError text={errors.password} />}
                      </Form.Field>
                      <Form.Field>
                        <label>Ngày sinh</label>

                        <Input icon='lock' iconPosition='left' type='password' id='password' name='password' placeholder="******"
                          value={data.password}
                          onChange={this.onChange} />
                        {errors.password && <InlineError text={errors.password} />}
                      </Form.Field>
                      <Form.Field>
                        <label>Loại bằng</label>

                        <Input icon='lock' iconPosition='left' type='password' id='password' name='password' placeholder="******"
                          value={data.password}
                          onChange={this.onChange} />
                        {errors.password && <InlineError text={errors.password} />}
                      </Form.Field>
                      <Button primary>Thêm thành viên</Button>
                    </Form>
                  
        </Container>
    );
  }
}

AddStudentForm.prototypes = {
  submit: PropTypes.func.isRequired
}



