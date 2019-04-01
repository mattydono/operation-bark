import React, { ChangeEventHandler, Component } from 'react';
import { connect } from 'react-redux';
import { User, UserType } from '../models';
import { AppState } from '../redux/configureStore';
import { addUser } from './redux/userActions';

type StateProps = {
  users: Record<string, User>;
};

type DispatchProps = {
  addUser: (user: User) => void;
};

type Props = StateProps & DispatchProps;

type State = {
  email: string;
  firstName: string;
  surname: string;
  type: UserType | null;
};

export class _Registration extends Component<Props, State> {
  public state: State = {
    email: '',
    firstName: '',
    surname: '',
    type: null,
  };

  public render() {
    return (
      <div>
        <input
          value={this.state.firstName}
          placeholder='firstname'
          onChange={this.onFirstNameChange}
        />
        <input
          value={this.state.surname}
          placeholder='surname'
          onChange={this.onSurnameChange}
        />
        <input
          value={this.state.email}
          placeholder='email'
          onChange={this.onEmailChange}
        />
        <select value={this.state.type || ''} onChange={this.onTypeChange}>
          <option value=''>Select...</option>
          {Object.values(UserType).map(userType => (
            <option value={userType}>{userType}</option>
          ))}
        </select>
        <button onClick={this.onAddUser}>Submit</button>
        <button onClick={this.onPrint}>Print</button>
      </div>
    );
  }

  private onPrint = () => {
    console.log(this.props.users);
  };

  private onTypeChange: ChangeEventHandler<HTMLSelectElement> = event => {
    const value: UserType | null =
      (event.currentTarget.value as UserType) || null;
    this.setState({ type: value });
  };

  private onFirstNameChange: ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({ firstName: event.currentTarget.value });
  };

  private onSurnameChange: ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({ surname: event.currentTarget.value });
  };

  private onEmailChange: ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({ email: event.currentTarget.value });
  };

  private onAddUser = () => {
    const user = { ...this.state };
    if (user.type !== null) {
      // Typescript not registering null check -> as User
      return this.props.addUser(user as User);
    }
  };
}

const mapStateToProps = (state: AppState): StateProps => ({
  users: state.users.users,
});

const dispatchMap: DispatchProps = {
  addUser,
};

export const Registration = connect(
  mapStateToProps,
  dispatchMap,
)(_Registration);
