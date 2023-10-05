import React, { Component } from 'react';

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: {}
    };
  }

  componentDidMount() {
    fetch("/user")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, user } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>Customize user profile</p>
          <table>
            <tr><td>Name</td><td><input type="text" value={user.name} /></td></tr>
            <tr><td>Email</td><td><input type="text" value={user.email} /></td></tr>
          </table>
        </div>
      );
    }
  }
}

export default Settings;
