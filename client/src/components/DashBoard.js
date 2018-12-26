import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import { Container, Table, Button } from 'semantic-ui-react';
import { allStudents } from '../actions/auth'
import { connect } from 'react-redux'
import _ from 'lodash'


class DashBoard extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentWillMount() {
    this.props.allStudents()
  }

  render() {
    const { user } = this.props
    return (
      <Container fluid>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Họ và tên</Table.HeaderCell>
              <Table.HeaderCell>Số CMND</Table.HeaderCell>
              <Table.HeaderCell>Ngày sinh</Table.HeaderCell>
              <Table.HeaderCell>SĐT</Table.HeaderCell>
              <Table.HeaderCell>Loại bằng</Table.HeaderCell>
              <Table.HeaderCell>Số giờ lái</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {user !== undefined && user.length !== 0 ? _.map(user, (o, index) => <Table.Row>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{o.fullName}</Table.Cell>
              <Table.Cell>{o.idCode}</Table.Cell>
              <Table.Cell>{o.dob}</Table.Cell>
              <Table.Cell>{o.phone}</Table.Cell>
              <Table.Cell>{o.certiType}</Table.Cell>
              <Table.Cell>{Math.round(o.learningTime * 1000) / 1000}</Table.Cell>
              <Table.Cell collapsing>
                <Button circular icon='delete' color='red' />
              </Table.Cell>
            </Table.Row>
            )
              : null}

          </Table.Body>
        </Table>
      </Container>

    )
  }
}
const mapStateToProps = state => {
  const { user } = state
  return { user }
}
export default connect(mapStateToProps, { allStudents })(DashBoard)