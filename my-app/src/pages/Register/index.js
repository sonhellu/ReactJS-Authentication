import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { URL } from '../../constants/apiCall';
const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const history = useHistory()
    const goLogin = () => {
        history.push("/login")
    }
    async function handleRegister(e) {
        e.preventDefault();
        console.log(username, email, password, repassword);
        const url = await (URL + "api/auth/signup");
        return axios({
            method: 'post',
            url: url,
            data: {
                name: username,
                email: email,
                password: password,
                comfirmpassword: repassword,
            }
        })
            .then((res) => {
                if (res.status === 201)
                    history.push('/login')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mx-4">
                        <div className="card-body p-4">
                            <h1>Register</h1>
                            <form onSubmit={(e) => handleRegister(e)}>
                                <p className="text-muted" >Create your account</p>
                                <div className="input-group mb-3">
                                    <input className="form-control"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        placeholder="Username" />
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        required
                                        className="form-control"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email" />
                                </div>
                                <div className="input-group mb-3">
                                    <input className="form-control" type="password"
                                        required
                                        value={password}
                                        minLength="6"
                                        maxLength="8"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password" />
                                </div>
                                <div className="input-group mb-4">
                                    <input 
                                        required
                                        className="form-control" 
                                        type="password"
                                        value={repassword}
                                        onChange={(e) => setRepassword(e.target.value)}
                                        placeholder="Password" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary px-4" type="submit">Register</button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button onClick={goLogin} className="btn btn-link px-0" type="button">
                                            Already have an account??
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer p-4">
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-block btn-facebook" style={{backgroundColor:'blue' , color : 'white'}} type="button"><span>Facebook</span></button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-block btn-google" type="button" style={{backgroundColor:'red' , color : 'white'}}><span>Google</span></button>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;