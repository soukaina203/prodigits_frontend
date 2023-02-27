import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
//there is  a diffrence between putting in a input value d.data.product.title and putting a variable from a hook
import axios from 'axios';
export default function EditProduct() {
  const navigate = useNavigate();
  const [title,setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
    const { id } = useParams();
  
    const fetchProduct = async () => {
        const d = await axios.get(`http://127.0.0.1:8000/api/product/edit/${id}`);
        setTitle(d.data.product.title);
        setDescription(d.data.product.description);
        setPrice(d.data.product.price)
    };
    useEffect(() => {
        fetchProduct();
    }, [])
    const updateProduct = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('_method', 'PATCH')
      formData.append('title', title)
      formData.append('description', description)
      formData.append('price', price)
      const res= await axios.post(`http://127.0.0.1:8000/api/product/${id}`, formData)
      console.log(res.data)
       navigate('/products')
  
  }

    // Use the ID to fetch user details from an API or do something else


    return (
       
      <div className="container">
       
      <div className="row justify-content-center">
          <div className="conl-12 col-sm-12 col-md-12">
              <div className="card">
                  <div className="card-body">
                      <h3 className="card-title"> Create Form</h3>
                      <hr></hr>
                      <div className="from-wrapper">

                          <form onSubmit={updateProduct} method="POST">

                              <div className="mb-3">
                                  <label className="form-label">Title  </label>
                                  <input type="text" className="form-control" 
                                      name="title"

                                  value={title}
                                  onChange={(e)=>{setTitle(e.target.value)}}
                                  />fdgdg
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
                                      value={price}
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
    );
};