import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            if (res.status === 200) {
              this.props.history.push('/');
              console.log(this)
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            alert('Error logging in please try again');
          });
        }

    render() {
       // const {Username, Password, errors} = this.state; 
        return(
            <div className="container" >
                <h2 className="login">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input type="username" placeholder="Username"
                        onChange={this.handleInputChange}
                        value={this.state.Username}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        onChange={this.handleInputchange}
                        value={this.state.Password} />
                    </div>
                    <div className="from-group">
                        <button type="submit" className="btn btn-primary">
                            Login User </button>

                    </div>
                </form>
            </div>
        )
    }
}

export default Login;