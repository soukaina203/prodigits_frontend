
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiClient, { csrfToken } from './sanctum';
// axios.defaults.WithCredentials =true
axios.defaults.withCredentials = true;
export default function SignUp(props) {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const createProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)



        const res = await axios.post('http://127.0.0.1:8000/api/signUp',formData)
        
        console.log(res.data);
        console.log("gone");
        // navigate('/products');
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="conl-12 col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title"> Create Form</h3>
                            <hr></hr>
                            <div className="from-wrapper">

                                <form onSubmit={createProduct} method="POST">
                                <input type="hidden" name="_token" value={props.csrfToken} />

                                    <div className="mb-3">
                                        <label className="form-label">Title  </label>
                                        <input type="text" className="form-control"
                                            name="name"

                                            value={name}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Example textarea</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            name="email"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Price  </label>
                                        <input type="text" onChange={(e) => { setPassword(e.target.value) }}
                                            name="password"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary mb-3">  Save</button>
                                    </div>

                                </form>



                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )




}