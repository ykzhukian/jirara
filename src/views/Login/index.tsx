import { FormEvent, useState } from 'react';
import * as qs from 'qs';
import { cleanObject, useMount, useDebounce } from '../../utils';

import './index.less';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const login = (param: {
    username: string,
    password: string
  }) => {
    console.log('param', param);
    fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
      }
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          用户名：
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          密码：
          <input type="password" id="password" />
        </label>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default Login;
