<<<<<<< HEAD
import React, { ChangeEventHandler, Component } from 'react';
=======
import React, { useCallback, useState } from 'react';
>>>>>>> feat: password fields + validation added
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

<<<<<<< HEAD
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
      </div>
    );
  }

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
=======
const _Registration = (props: Props) => {
  const [firstName, onFirstNameChange] = useField('');
  const [surname, onSurnameChange] = useField('');
  const [type, onTypeChange] = useField<UserType | null, HTMLSelectElement>(null);
  const [email, onEmailChange] = useField('');
  const [password, onPasswordChange] = useField('');
  const [confirmPassword, onConfirmPasswordChange] = useField('');
  const [isValid, setIsValid] = useState(false);

  const onAddUser = useCallback(() => {
    const user = { email, firstName, surname, type, password, confirmPassword };
>>>>>>> feat: password fields + validation added
    if (user.type !== null) {
      // Typescript not registering null check -> as User
      return this.props.addUser(user as User);
    }
<<<<<<< HEAD
  };
}
=======
  }, [email, firstName, surname, type, password, confirmPassword]);

  const disabled =
    type === null ||
    firstName === '' ||
    surname === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === '' ||
    isValid === false;

  // const [value, onValueChange] = useField('');
  // const [isValid, setIsValid] = useState(false);

  // const onChange = useCallback(event => {
  //    isValidCcyPair(event.currentTarget.value).then(setIsValid);
  //    onValueChange(event;
  //    setIsValid(false);
  // }, []);

  const onChange = useCallback(
    event => {
      setIsValid(event.currentTarget.value === password);
      onConfirmPasswordChange(event);
    },
    [password, setIsValid, onConfirmPasswordChange],
  );

  return (
    <div>
      <input value={firstName} placeholder='firstname' onChange={onFirstNameChange} />
      <input value={surname} placeholder='surname' onChange={onSurnameChange} />
      <input value={email} placeholder='email' onChange={onEmailChange} />
      <input type='password' value={password} placeholder='password' onChange={onPasswordChange} />
      <input
        type='password'
        value={confirmPassword}
        placeholder='confirmPassword'
        onChange={onChange}
      />
      <select value={type || ''} onChange={onTypeChange}>
        <option value=''>Select...</option>
        {Object.values(UserType).map(userType => (
          <option value={userType}>{userType}</option>
        ))}
      </select>
      <button disabled={disabled} onClick={onAddUser}>
        Submit
      </button>
    </div>
  );
};
>>>>>>> feat: password fields + validation added

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
