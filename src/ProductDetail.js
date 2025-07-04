import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "./useApi";

function ProductDetail() {
    const param = useParams();
    const { product: prod, loading: load } = useApi(`http://localhost:3000/products/${param.id}`);

    console.log(load);
    console.log(prod);

    const nevigate = useNavigate();

    return (
        <>
            {load && <div className="spinner-border text-danger" id="sp"></div>}

            {!load && (
                <div className="card" style={{ width: 300 }} id="card">
                    <img className="card-img-top" src={prod.img1} alt="Card image" id="img1" />
                    <div className="card-body">
                        <h4 className="card-title">{prod.id}</h4>
                        <p className="card-text">{prod.name}</p>
                        <p className="card-text">{prod.price}</p>
                        <p className="card-text">{prod.category}</p>
                        <p className="card-text">{prod.description}</p>
                        <a href="#" className="btn btn-primary">AddToCart</a>

                        <button className="btn btn-link"
                            onClick={() => {
                                setTimeout(() => {
                                    nevigate('/product')
                                }, 200)

                            }}
                        >GoBack</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductDetail;