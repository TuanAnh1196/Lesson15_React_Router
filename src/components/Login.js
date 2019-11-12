import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUserName: "",
      txtPassword: "",
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  onLogin = (e) => {
    e.preventDefault();
    var { txtUserName, txtPassword } = this.state;
    if (txtUserName === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({
        username: txtUserName,
        password: txtPassword,
      }));
    }
  }
  render() {
    var { txtUserName, txtPassword } = this.state;
    var loggedUser = localStorage.getItem('user');
    if (loggedUser !== null) {
      var { location } = this.props;

      return <Redirect to={{
        pathname: '/product',
        state: {
          from: location,
        }
      }} />
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onLogin}>
              <legend>Đăng nhập</legend>

              <div className="form-group">
                <label>UserName: </label>
                <input
                  name="txtUserName"
                  type="text"
                  className="form-control"
                  placeholder="Input field"
                  value={txtUserName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                  name="txtPassword"
                  type="password"
                  className="form-control"
                  placeholder="Input field"
                  value={txtPassword}
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>

      </div>
    );
  }

}

export default Login;
