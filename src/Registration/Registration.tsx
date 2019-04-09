import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useField } from '../Components';
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
    if (user.type !== null) {
      // Typescript not registering null check -> as User
      return props.addUser(user as User);
    }
  }, [email, firstName, surname, type, password, confirmPassword, props.addUser]);

  useEffect(() => {
    if (
      type !== null &&
      firstName !== '' &&
      surname !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      setIsValid(true);
    }
  }, [type, firstName, surname, email, password, confirmPassword]);

  const onTypeConversion = useCallback(
    event => {
      const { value } = event.currentTarget;
      onTypeChange(value !== '' ? value : null);
    },
    [onTypeChange],
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
        onChange={onConfirmPasswordChange}
      />
      <select value={type || ''} onChange={onTypeConversion}>
        <option value=''>Select...</option>
        {Object.values(UserType).map(userType => (
          <option value={userType}>{userType}</option>
        ))}
      </select>
      <button disabled={!isValid} onClick={onAddUser}>
        Submit
      </button>
    </div>
  );
};

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
