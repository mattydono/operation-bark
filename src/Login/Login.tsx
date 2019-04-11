import React, { ChangeEventHandler, Component } from 'react';

type State = {
  email: '';
  password: '';
};

export class Login extends Component {
  public state: State = {
    email: '',
    password: '',
  };

  public render() {
    return (
      <div>
        <input placeholder='Email' value={this.state.email} onChange={this.onEmailChange} />
        <input
          placeholder='Password'
          type='password'
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
      </div>
    );
  }

  private onEmailChange: ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({ email: event.currentTarget.value });
  };

  private onPasswordChange: ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({ password: event.currentTarget.value });
  };
}
