import React, { Component } from 'react';
import { Container,Form, Input, Message, Button, Dropdown } from 'semantic-ui-react'
// import Validator from 'validator'
import PropTypes from 'prop-types'
import InlineError from './InlineError'



export default class AddStudentForm extends Component {
  state = {
    data: {
      fullName: '',
      idCode: '',
      phone: '',
      dob: '',
      certiType: ''
    },
    loading: false,
    errors: {},
    user: {}
  }
  stateOptions = [
    { key: '1', value: 'B1', text: 'B1' },
    { key: '2', value: 'B2', text: 'B2' },
    { key: '3', value: 'C', text: 'C' },
    { key: '4', value: 'D', text: 'D' },
  ]
  onChange = (e, data) => this.setState({
    data: { ...this.state.data, [data.name]: data.value }
  })

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true })
      this.props.submit(this.state.data)
        .catch(err => {
          console.log('err.response', err.response)
          this.setState({ errors: err.response.data.errors, loading: false })})
    }
  }

  validate = (data) => {
    const errors = {}
    // if (!Validator.isEmail(data.email)) errors.email = "Email không đúng định dạng"
    // if (!data.password) errors.password = "Không được trống"
    return errors
  }

  render() {
    const { data, errors, loading } = this.state
    return (

      <Container>
        {this.props.user.idCode && <Message positive
          attached
          header='Thêm thành công'
          content={this.props.user.fullName}
        />}
        <Form onSubmit={this.onSubmit} loading={loading}>

          {errors.global && <Message negative>
            <Message.Header content="Lỗi" />
            <p>{errors.global}</p></Message>}
          <Form.Field>
            <label>Số CMND</label>

            <Input icon='id card' iconPosition='left' type='text' id='idCode' name='idCode'
              value={data.idCode}
              onChange={this.onChange} />
            {errors.idCode && <InlineError text={errors.idCode} />}
          </Form.Field>
          <Form.Field>
            <label>Họ và tên</label>

            <Input icon='user' iconPosition='left' type='text' id='fullName' name='fullName'
              value={data.fullName}
              onChange={this.onChange} />
            {errors.fullName && <InlineError text={errors.fullName} />}
          </Form.Field>
          <Form.Field>
            <label>Số điện thoại</label>

            <Input icon='phone' iconPosition='left' type='tel' id='phone' name='phone'
              value={data.phone}
              onChange={this.onChange} />
            {errors.phone && <InlineError text={errors.phone} />}
          </Form.Field>
          <Form.Field>
            <label>Ngày sinh</label>

            <Input icon='lock' iconPosition='left' type='date' id='dob' name='dob'
              value={data.dob}
              onChange={this.onChange} />
            {errors.dob && <InlineError text={errors.dob} />}
          </Form.Field>
          <Form.Field>
            <label>Loại bằng</label>
            <Dropdown placeholder='Loại bằng' id="certiType" name="certiType" search selection options={this.stateOptions} onChange={this.onChange} />
            {errors.certiType && <InlineError text={errors.certiType} />}
          </Form.Field>
          <Button primary>Thêm học viên</Button>
        </Form>

      </Container>
    );
  }
}

AddStudentForm.prototypes = {
  submit: PropTypes.func.isRequired
}



