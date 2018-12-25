import React, { Component } from 'react'

export default class AddUser extends Component {
  render() {
    return (
        <div>
        <nav classname="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a classname="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Mandevices</a>
          <input classname="form-control form-control-dark w-100" type="text" placeholder="Tìm kiếm theo tên" aria-label="Search" />
          <ul classname="navbar-nav px-3">
            <li classname="nav-item text-nowrap">
              <a classname="nav-link" href="#">Đăng xuất</a>
            </li>
          </ul>
        </nav>
        <div classname="container-fluid">
          <div classname="row">
            <nav classname="col-md-2 d-none d-md-block bg-light sidebar">
              <div classname="sidebar-sticky">
                <ul classname="nav flex-column">
                  <li classname="nav-item">
                    <a classname="nav-link" href="./index.html">
                      <span data-feather="home">
                        Tổng quan
                      </span></a>
                  </li>
                  <li classname="nav-item">
                    <a classname="nav-link active" href="./userResult.html">
                      <span data-feather="user">
                        Học viên
                      </span></a>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" classname="col-md-9 ml-sm-auto col-lg-10 px-4">
              <br />
              <h2>Thêm học viên</h2>
              <br />
              <form>
                <div classname="form-group">
                  <label htmlfor="exampleInputEmail1">Số CMND</label>
                  <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="132xxxxxx" />
                  <small id="emailHelp" classname="form-text text-muted">Số chứng nhân dân của học viên</small>
                </div>
                <div classname="form-group">
                  <label htmlfor="exampleInputPassword1">Họ và tên</label>
                  <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Le Van A" />
                </div>
                <div classname="form-group">
                  <label htmlfor="exampleInputPassword1">Số điện thoại</label>
                  <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="09xxxxxxx" />
                </div>
                <div classname="form-group">
                  <label htmlfor="exampleInputPassword1">Ngày sinh</label>
                  <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="dd/mm/yyyy" />
                </div>
                <div classname="form-group">
                  <label htmlfor="inputState">Loại bằng</label>
                  <select id="inputState" classname="form-control">
                    <option selected>B1</option>
                    <option>B2</option>
                  </select>
                </div>
                <button type="submit" classname="btn btn-primary">Thêm thành viên</button>
              </form>
            </main>
          </div>
        </div>
      </div>
      
    )
  }
}
