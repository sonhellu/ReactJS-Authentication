import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { URL } from '../../constants/apiCall';
import { useHistory } from "react-router-dom";
import axios from "axios";
const Login = (props) => {
  // const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies('token', 'user', 'name');

  const history = useHistory();

  function goRegister() {
    history.push("/register");
  }

  async function handleLogin(e) {
    e.preventDefault();
    console.log(email, password)
    const url = await URL + "api/auth/login";
    try {
      return axios({
        method: 'post',
        url: url,
        data: {
          email: email,
          password: password
        }
      })
        .then((res) => {
          if (res.status === 200) {
            setCookie("token", res.data.token)
            setCookie("user", res.data.uer)
            setCookie("name", res.data.user.name)
          }
          console.log(cookie.name);
          alert("Dang nhap thanh cong")
        })
        .catch(() => {
          alert("Dang nhap that bai")
        })
    } catch (err) {
      alert("Dang nhap that bai");
    }
  }

  return (
    <div className="c-app flex-row align-items-center mt-50" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Login</h1>
                  <form onSubmit={(event) => handleLogin(event)}>
                    <div className="form-group">
                      <label >Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input
                        // ref={register({ required: true, maxLength: 20 })}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button className="btn btn-primary px-4" type="submit">Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <button className="btn btn-link px-0" type="button">
                          Forget Password?
                      </button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
              <div
                className="card text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <div className="card-body text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                  </p>
                    <button
                      onClick={goRegister}
                      className="btn btn-lg btn-outline-light mt-3"
                      type="button"
                    >
                      Register Now!
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;