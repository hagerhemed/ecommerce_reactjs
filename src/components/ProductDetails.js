// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Product2 from "./Product2";

// function ProductDetails(){
//     const api_url ="https://fakestoreapi.com/products";
//     const [product,setProduct] =useState({});
//     const params =useParams();
//     console.log(params);
//     useEffect(() => {
//         fetch(`${api_url}/${params.productId}`)
//             .then(res=>res.json())
//             .then(json=>setProduct(json))
//     },[])
//     return(
//         <>
//        <Product2 product={product}  showbutton={false}/>
//         </>
//     )
// }
// export default ProductDetails;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product2 from "./Product2";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-10 col-md-8 col-lg-6">
          <Product2 product={product} showbutton={false} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;