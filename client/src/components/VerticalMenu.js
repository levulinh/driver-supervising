import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

 class VerticalMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
        if (name === "student") this.props.history.push("/addStudent")
    }

    render() {
        const { activeItem } = this.state

        return (
            <Container>
                <Menu vertical fluid >
                    <Menu.Item>
                        <Menu.Header>Tổng quan</Menu.Header>

                        <Menu.Menu>
                            <Menu.Item
                                fitted='horizontally'
                                content="Danh sách học viên"
                                active={activeItem === 'enterprise'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                content='Lịch thi sát hạch'
                                active={activeItem === 'consumer'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                content='Thông tin xe tập lái'
                                active={activeItem === 'consumer'}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header>Quản lý</Menu.Header>

                        <Menu.Menu>
                            <Menu.Item
                                content='Thêm học viên'
                                name='student'
                                active={activeItem === 'rails'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='python'
                                active={activeItem === 'python'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header>Hosting</Menu.Header>

                        <Menu.Menu>
                            <Menu.Item
                                name='shared'
                                active={activeItem === 'shared'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='dedicated'
                                active={activeItem === 'dedicated'}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header>Hỗ trợ</Menu.Header>

                        <Menu.Menu>
                            <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
                                E-mail Support
            </Menu.Item>

                            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                                FAQs
            </Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
            </Container>
        )
    }
}

VerticalMenu.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(null,null,null)(VerticalMenu)