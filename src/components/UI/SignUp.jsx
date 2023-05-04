import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  return (
    <div className="signup__wrapper">
    <div className="signup__container">
      <div className="card">
        <h1>Sign Up</h1>
        <form>
          <div className="p-field pb-2">
            <span className="p-input-icon-right">
              <i className="pi pi-user" />
              <InputText
                id="name"
                type="text"
                value={name}
                label="Name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
              />
            </span>
          </div>

          <div className="p-field pb-2">
            <span className="p-input-icon-right">
              <i className="pi pi-envelope" />
              <InputText
                id="email"
                type="email"
                value={email}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </span>
          </div>

          <div className="p-field pb-2">
            <Password
              id="password"
              value={password}
              label="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              toggleMask
            />
          </div>

          <div className="p-field pb-2">
            <Password
              id="password_confirmation"
              value={password_confirmation}
              label="Confirm Password"
              placeholder="Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              feedback={false}
              toggleMask
            />
          </div>

          <Button label="Sign Up" type="submit" className="bg-green-500 border-200"/>
          <p>
            Already have an account?
            <NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp