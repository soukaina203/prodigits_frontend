
import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProduct(){

    const navigate = useNavigate();

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

  

    const createProduct = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title)
        formData.append('description', description)
        formData.append('price', price)

      
            
            const res= await axios.post('http://127.0.0.1:8000/api/product/add', formData)
            console.log(res.data);
            navigate('/products');
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="conl-12 col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title"> Create Form</h3>
                            <hr></hr>
                            <div className="from-wrapper">

                                <form onSubmit={createProduct} method="POST">

                                    <div className="mb-3">
                                        <label className="form-label">Title  </label>
                                        <input type="text" className="form-control" 
                                            name="title"

                                        value={title}
                                        onChange={(e)=>{setTitle(e.target.value)}}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Example textarea</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                            value={description}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                            name="description"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Price  </label>
                                         <input type="text" onChange={(e)=>{setPrice(e.target.value)}}
                                            name="price"
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