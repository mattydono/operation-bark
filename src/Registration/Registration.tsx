import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../redux/configureStore';
import { addUser } from './redux/userActions';
import { User } from './User';

type StateProps = {
  users: User[];
};

type DispatchProps = {
  addUser: (user: User) => void;
};

type State = {
  email: string;
  firstName: string;
  surname: string;
  type: string;
};

type Props = StateProps & DispatchProps;

export class _Registration extends Component<Props, State> {
  public state: State = {
    email: '',
    firstName: '',
    surname: '',
    type: 'General',
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
        <select value={this.state.type} onChange={this.onTypeChange}>
          <option>Select...</option>
          <option value='General'>General</option>
          <option value='Breeder'>Breeder</option>
          <option value='Adoption Centre'>Adoption Centre</option>
          <option value='Walker'>Walker</option>
          <option value='Owner'>Owner</option>
          <option value='Sitter'>Sitter</option>
        </select>
        <button onClick={this.onAddUser}>Submit</button>
        <button onClick={this.onPrint}>Print</button>
      </div>
    );
  }

  private onPrint = () => {
    console.log(this.props.users);
  };

  private onTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ type: event.currentTarget.value });
  };

  private onFirstNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ firstName: event.currentTarget.value });
  };

  private onSurnameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ surname: event.currentTarget.value });
  };

  private onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ email: event.currentTarget.value });
  };

  private onAddUser = () => {
    return this.props.addUser(this.state);
  };
}

function mapStateToProps(state: AppState): StateProps {
  return {
    users: state.users.users,
  };
}

// function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
//     return {
//         addUser: (user: User) => dispatch(addUser(user))
//     }
// }

const dispatchMap: DispatchProps = {
  addUser,
};

export const Registration = connect<StateProps, DispatchProps>(
  mapStateToProps,
  dispatchMap,
)(_Registration);
