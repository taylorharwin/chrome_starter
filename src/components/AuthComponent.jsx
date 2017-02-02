import React from 'react';

const AuthComponent = props => {
  return (
    <div>
      <div className="form-group">
        Username
        <input
          onChange={props.onInputChange}
          autoComplete="off"
          className="input-group__field ui-autocomplete-input"
          type="text"
          name="username"
          placeholder="plaidypus"
          value={props.username} />
      </div>
      <div className="form-group">
        Password
        <input
          onChange={props.onInputChange}
          autoComplete="off"
          className="input-group__field ui-autocomplete-input"
          type="password"
          name="password"
          placeholder="plaidrocks123"
          value={props.password} />
      </div>
      <div className="form-group">
        Two-Factor Authentication Code
        <input
          onChange={props.onInputChange}
          autoComplete="off"
          className="input-group__field ui-autocomplete-input"
          type="text"
          name="twoFactor"
          placeholder="123456789"
          value={props.twoFactor} />
      </div>
    </div>);
};

AuthComponent.propTypes = {
  onInputChange: React.PropTypes.func.isRequired,
  password: React.PropTypes.string,
  twoFactor: React.PropTypes.string,
  username: React.PropTypes.string,
};

export default AuthComponent;
