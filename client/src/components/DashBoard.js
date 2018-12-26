import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Table } from 'semantic-ui-react';
import HeaderMenu from './HeaderMenu';
import VerticalMenu from './VerticalMenu';

export default class DashBoard extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
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
            </Table>
      </Container>

    )
  }
}