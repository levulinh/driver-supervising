import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu, Button, Image } from 'semantic-ui-react'

const HeaderMenu = () => (
    <Menu>
        <Menu.Item>
            <Image src='/logoLab.png' width="50" />
        </Menu.Item>
        <Menu.Item >
            <Input className='icon' icon='search' placeholder='Tìm kiếm theo tên' />
        </Menu.Item>

        <Menu.Item position='right'>
            <Link to="/login">
                <Button content="Đăng xuất" />
            </Link>

        </Menu.Item>
    </Menu>
)

export default HeaderMenu