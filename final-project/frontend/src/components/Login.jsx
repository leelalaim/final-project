//Outer Dependencies
import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'

//Inner Dependencies
import {fetchLogIn} from '../reducers/user'


export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogIn(username, password))
  }

    return (
        <section>
          <form onSubmit={onFormSubmit}>
          <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            ></input>
            <button
              type="submit"
              onClick={() => {
                console.log('CLICK');
              }}
              >Log In
            </button>
          </form>
        </section>
    )
}