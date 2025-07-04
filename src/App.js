import { useEffect, useState } from "react";
import Productlist from "./Productlist";
import { useApi } from "./useApi";
function App() {


    // const [Products, setProducts] = useState([]);
    const [url, setUrl] = useState(`http://localhost:3000/products`);
    const { product: Products, loading: load } = useApi(url);
    console.log(load);



    // useEffect(() => {
    //     fetch(url)
    //         .then(d => d.json())
    //         .then(res => setProducts(res));
    // }, [url]);

    return (


        <>
            <h1>My E-Books</h1>
            {
                load && <p>Loading...</p>
            }
            <div id="btn1">
                <button className="btn btn-success"
                    onClick={() => setUrl(`http://localhost:3000/products`)}
                >All</button>

                <button className="btn btn-danger"
                    onClick={() => setUrl(`http://localhost:3000/products?category=mobile`)}
                >Laptop</button>

                <button className="btn btn-warning"
                    onClick={() => setUrl(`http://localhost:3000/products?category=laptop`)}
                >Mobile</button>

                <button className="btn btn-primary"
                    onClick={() => setUrl(`http://localhost:3000/products?category=watch`)}
                >watch</button>

                <button className="btn btn-secondary"
                    onClick={() => setUrl(`http://localhost:3000/products?category=tv`)}
                >TV</button>
                <br /><br />
            </div>

            {
                load && <div className="spinner-border text-danger" id="sp"></div>
            }<br /><br />

            <Productlist product1={Products} />


        </>

    );

}

export default App;