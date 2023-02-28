import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function ListerProducts() {
    const [data, setData] = useState([]);
    let fetchData = async () => {
        const datas = await axios("http://localhost:8000/api/product/get");
        setData(datas.data)
    }
    useEffect(() => {
        fetchData();
    }, []);
    let deleteProduct = async (id) => {
        let res = await axios.post(`http://localhost:8000/api/product/delete/${id}`);
        console.log(res)
        console.log("hjj")
        fetchData();
    }
    return (
        <div style={{ 'width': '95%' }}>
            <button>
                <Link to='/api/products/create'>Ajouter </Link>
            </button>
            {
                <table className="table table-bordered ">
                    <tr>
                        <th>title</th>
                        <th>Price</th>

                        <th>Actions</th>

                    </tr>
                    {data.map((e, i) => {
                        return (
                            <tr>

                                <td>{e.title}</td>
                                <td>{e.price}</td>

                                <td>
                                    <Link to={`/product/${e.id}`}> Voir</Link>
                                    <Link to={`/product/edit/${e.id}`}> Modifier</Link>

                                    <button onClick={() => deleteProduct(e.id)}>  Supprimer </button>

                                </td>
                            </tr>
                        )

                    })}


                </table>

            }
        </div>
    )
}

export default ListerProducts
